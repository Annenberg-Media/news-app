import React from 'react';
import { StatusBar } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <BottomTabNavigator />
        </SafeAreaProvider>
    );
};

export default App;
