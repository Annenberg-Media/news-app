import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PopularSearch from '../components/PopularSearch';
import COLORS from '../constants/colors';
import SearchBar from '../components/SearchBar';
import { HistoryItem } from '../components/HistoryItem';
import { getItems, removeItem, saveItem } from '../api/StorageService';
import KEYS from '../constants/keys';
import TYPOGRAPHY from '../constants/typography';

const SearchScreen = () => {
    const [history, setHistory] = useState<{ id: string; text: string }[]>([]);
    const [showHistory, setShowHistory] = useState(false);

    // Load history on initial render
    useEffect(() => {
        const loadHistory = async () => {
            try {
                const savedHistory = await getItems(KEYS.SAVED_HISTORY_KEY);
                console.log("Loaded history:", savedHistory);
                setHistory(savedHistory);
            } catch (error) {
                console.error("Error loading history:", error);
            }
        };
        
        loadHistory();
    }, []);



    const handleSearch = async (query: string) => {
        if (!query.trim()) return; // Don't save empty queries
        
        console.log("Search query:", query);
        
        // Create new history entry
        const newEntry = { id: Date.now().toString(), text: query };
        
        try {
            // Update state first for immediate UI feedback
            const updatedHistory = [...history, newEntry];
            setHistory(updatedHistory);
            
            // Then save to AsyncStorage
            await saveItem(KEYS.SAVED_HISTORY_KEY, newEntry);
            
            // Verify save was successful
            const savedHistory = await getItems(KEYS.SAVED_HISTORY_KEY);
            console.log("History saved successfully:", savedHistory);
        } catch (error) {
            console.error("Error saving search history:", error);
        }
    };

    const handleRemove = async (id: string) => {
        try {
            // Update state first for immediate UI feedback
            const updatedHistory = history.filter(item => item.id !== id);
            setHistory(updatedHistory);
            // Then remove from AsyncStorage
            await removeItem(KEYS.SAVED_HISTORY_KEY, id);
            console.log("Item removed successfully");
        } catch (error) {
            console.error("Error removing history item:", error);
        }
    };
    
    const onFocus = () => {
        setShowHistory(true);
        console.log("now in focus!")
    } // callback when user is on search bar, show history

    const onBlur = () => {
        setShowHistory(false);
        console.log("now out of focus!!")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SearchBar 
                    onSearch={handleSearch} 
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {showHistory && <HistoryTitle />}
                {showHistory && history.length > 0 && (
                    <View style={styles.historyContainer}>
                        {history.map((item) => (
                            <HistoryItem 
                                key={item.id} 
                                id={item.id} 
                                text={item.text} 
                                handleRemove={handleRemove} 
                            />
                        ))}
                    </View>
                )}
                {!showHistory && <PopularSearch searchStrings={["hello", "Annenberg", "USC"]} />}
            </View>
        </SafeAreaView>
    );
};

// need to add rectangle here and fix styles
const HistoryTitle = () => (
    <View>
        <Text style={styles.historyTitle}>Search History</Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        flex: 1,
        paddingHorizontal: 15,
    },
    historyContainer: {
        marginTop: 10,
    },
    historyTitle: {
        ...TYPOGRAPHY.headings.h6,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingTop: 20,
    },
    
});

export default SearchScreen;
