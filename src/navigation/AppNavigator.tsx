import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import ReaderScreen from '../screens/ReaderScreen';
import COLORS from '../constants/colors.ts';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Reader"
                    component={ReaderScreen}
                    options={{
                        headerShown:true,
                        headerStyle: { backgroundColor: COLORS.primary },
                        headerTintColor: COLORS.white,
                        headerTitle: '',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
