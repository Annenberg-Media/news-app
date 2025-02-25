import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

const VideoScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content} />
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

export default VideoScreen;
