import React = require('react');
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import {fetchTrendingSearches} from './src/api/TrendingService';

const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the data as soon as the app loads
                await fetchTrendingSearches();
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <AppNavigator />
        </SafeAreaProvider>
    );
};

export default App;
