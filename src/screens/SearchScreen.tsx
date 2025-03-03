import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PopularSearch from '../components/PopularSearch';
import COLORS from '../constants/colors';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const handleSearch = (query: string) => {
        console.log("Search query:", query);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SearchBar onSearch={handleSearch} />
            </View>                 
            <PopularSearch searchStrings={["hello", "annenburg", "USC"]} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        padding: 0,
    },
});



export default SearchScreen;
