import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <AppNavigator />
        </SafeAreaProvider>
    );
};

export default App;
