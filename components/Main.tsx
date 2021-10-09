import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import { View } from 'react-native';
import HomeScreen from './Home';
import FavoriteScreen from './Favorite';

const Tab = createBottomTabNavigator();

export class Main extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen
                    name='Home' component={HomeScreen}
                    options={{
                        headerStyle: { backgroundColor: '#BC1399' },
                        headerTintColor: '#fff',
                        title: 'Все изображения',
                        headerTitleAlign: 'center',
                        tabBarIcon: ({ focused, color, size }) => (
                            <MaterialCommunityIcons name='home' color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name='Favorite'
                    component={FavoriteScreen}
                    options={{
                        headerStyle: { backgroundColor: '#BC1399' },
                        headerTintColor: '#fff',
                        title: 'Избранное',
                        headerTitleAlign: 'center',
                        tabBarIcon: ({ focused, color, size }) => (
                            <MaterialCommunityIcons name='star-outline' color={color} size={26} />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
}

export default Main
