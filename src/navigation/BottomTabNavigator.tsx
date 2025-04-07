import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RadioScreen from '../screens/RadioScreen';
import VideoScreen from '../screens/VideoScreen';
import SearchScreen from '../screens/SearchScreen';
import SavedScreen from '../screens/SavedScreen';
import COLORS from '../constants/colors';
import HomeIcon from '../assets/icons/home.svg';
import SearchIcon from '../assets/icons/search.svg';
import VideoIcon from '../assets/icons/youtube.svg';
import RadioIcon from '../assets/icons/podcast.svg';
import SavedIcon from '../assets/icons/bookmark.svg';
import AMLogo from '../assets/images/AMLogo.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let IconComponent;
                    let iconColor = focused ? COLORS.primary : COLORS.black;

                    switch (route.name) {
                        case 'Home':
                            IconComponent = HomeIcon;
                            break;
                        case 'Radio':
                            IconComponent = RadioIcon;
                            break;
                        case 'Video':
                            IconComponent = VideoIcon;
                            break;
                        case 'Search':
                            IconComponent = SearchIcon;
                            break;
                        case 'Saved':
                            IconComponent = SavedIcon;
                            break;
                        default:
                            IconComponent = HomeIcon;
                    }

                    return <IconComponent width={24} height={24} color={iconColor} />;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.black,
                tabBarShowLabel: true,
                headerTitle: () => (
                    <AMLogo width={200} height={60} />
                ),
                headerStyle: { backgroundColor: COLORS.primary },
                headerTitleAlign: 'center',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Radio" component={RadioScreen} />
            <Tab.Screen name="Video" component={VideoScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
