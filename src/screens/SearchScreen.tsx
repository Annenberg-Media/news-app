import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import PopularSearches from '../components/PopularSearch';

const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.content} /> */}
            <PopularSearches />
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
