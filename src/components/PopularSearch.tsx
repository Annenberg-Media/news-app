import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg';
import { getItems } from '../api/StorageService';
import KEYS from "../constants/keys.ts";
import TYPOGRAPHY from '../constants/typography';

const PopularSearch = () => {
    const [popularSearches, setPopularSearches] = useState<string[]>([]);

    useEffect(() => {
        const fetchPopularSearches = async () => {
            const storedSearches = await getItems(KEYS.POPULAR_SEARCHES);
            if (Array.isArray(storedSearches)) {
                setPopularSearches(storedSearches);
            }
        };

        fetchPopularSearches();
    }, []);

    if (popularSearches.length === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>No Popular Searches</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BookmarkIcon width={24} height={24} stroke={COLORS.primary} style={styles.bookmarkIcon} />
                <Text style={styles.title}>Popular search</Text>
                {/* text should be aligned perfectly with icon */}
            </View>
            {/* <Text style={styles.title}>Popular search</Text> */}
            <View style={styles.content}>
            {popularSearches.map((searchTerm, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.searchButton}
                        onPress={() => console.log(searchTerm)}>
                        {/* // activeOpacity={0.7}> */}
                        <Text style={styles.buttonText}>{searchTerm}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 343,
        // height: 156,
        backgroundColor: COLORS.white,
        padding: 20,
        paddingTop: 0,
        gap: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 15,
    },
    bookmarkIcon: {
        position: 'relative',
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.black,
        marginBottom: 0,
        lineHeight: 18,
    },
    content: {
        flexDirection: "row",  
        flexWrap: "wrap",  
        gap: 8,  
    },
    searchButton: {
        height: 32,
        backgroundColor: COLORS.white,  
        borderWidth: 2,  
        borderColor: COLORS.primary,  
        paddingHorizontal: 8,
        borderRadius: 20,  
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        
        color: COLORS.black, 
        fontFamily: 'Arial',
        ...TYPOGRAPHY.body.medium,
        textAlign: "center",
    },
});

export default PopularSearch;