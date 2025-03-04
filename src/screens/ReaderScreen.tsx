import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import URLS from '../constants/urls.ts';
import COLORS from '../constants/colors.ts';

interface ReaderScreenRouteParams {
    url: string;
}

const ReaderScreen = () => {
    const route = useRoute<RouteProp<{ params: ReaderScreenRouteParams }, 'params'>>();
    const { url } = route.params;

    return (
        <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
            <View style={styles.container}>
                <WebView source={{ uri: URLS.ANN_BASE_URL + url }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
    },
});

export default ReaderScreen;
