import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
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

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let IconComponent;
            let iconColor = focused ? COLORS.primary : COLORS.secondary;
            const fillProp = route.name === 'Radio' ? { fill: iconColor } : { stroke: iconColor };


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

            return <IconComponent width={24} height={24} {...fillProp} />;
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarShowLabel: true,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Radio" component={RadioScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
