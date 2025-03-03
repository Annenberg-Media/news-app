import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        flex: 1,
        padding: 20,
    },
});



export default SearchScreen;
