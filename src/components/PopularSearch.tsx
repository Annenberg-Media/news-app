import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg';

const dummySearches = [
    "pride", "queer", "isa johnson trojan", "war",
    "daphne yaman", "indigenous", "asian students",
    "graham husted", "ashley rose wellman", "la raza"
];

const PopularSearch = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BookmarkIcon width={24} height={24} stroke={COLORS.primary} style={styles.bookmarkIcon} />
            </View>
            <Text style={styles.title}>Popular Searches</Text>
            <View style={styles.content}>
                {dummySearches.map((searchTerm, index) => (
                    <TouchableOpacity key={index} style={styles.searchButton} onPress={() => console.log(searchTerm)}>
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
        backgroundColor: COLORS.white,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    bookmarkIcon: {
        marginRight: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 15,
    },
    content: {
        flexDirection: "row",  // Makes buttons appear inline
        flexWrap: "wrap",  // Allows wrapping to the next line if needed
        gap: 10,  // Adds spacing between buttons
    },
    searchButton: {
        backgroundColor: COLORS.white,  // Button background is white
        borderWidth: 2,  // Border thickness
        borderColor: COLORS.primary,  // Border color
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,  // Rounded corners
    },
    buttonText: {
        color: COLORS.black,  // Text color remains black
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default PopularSearch;