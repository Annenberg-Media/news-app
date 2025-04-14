import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

const PopularSearch = (props: { searchStrings: string[] }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Popular Searches</Text>
            
            <View style={styles.content}>
                {props.searchStrings.map((ss, index) => (
                    <TouchableOpacity key={index} style={styles.searchButton} onPress={() => console.log(ss)}>
                        <Text style={styles.buttonText}>{ss}</Text>
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
