import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsCard from "../components/NewsCard.tsx";

const articles = [
    {
        id: '1',
        headline: 'A program’s lifeline: USC football high school recruiting tracker',
        credits: 'Thomas Johnson',
        readTime: '11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvuTBVw-XxV2DrJKP2MZJQn-aVS-Eu1hORw&s', // Replace with API image
    },
    {
        id: '2',
        headline: 'A program’s lifeline: USC football high school recruiting tracker',
        credits: 'Thomas Johnson',
        readTime: '11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvuTBVw-XxV2DrJKP2MZJQn-aVS-Eu1hORw&s', // Replace with API image
    },
    {
        id: '3',
        headline: 'A program’s lifeline: USC football high school recruiting tracker',
        credits: 'Thomas Johnson',
        readTime: '11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvuTBVw-XxV2DrJKP2MZJQn-aVS-Eu1hORw&s', // Replace with API image
    },
    // More articles...
];

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={articles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <NewsCard
                        headline={item.headline}
                        credits={item.credits}
                        readTime={item.readTime}
                        imageUrl={item.imageUrl}
                        onPress={() => console.log('Article clicked')}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default HomeScreen;
