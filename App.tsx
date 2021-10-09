import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
import HomeScreen from './components/Home';
import MainScreen from './components/Main';
import PhotoScreen from './components/Photo';
import { store } from './store/redux/index';
const Stack = createNativeStackNavigator();

export class App extends Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen
              name='Main'
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='Home'
              component={HomeScreen}
              options={{
                headerStyle: { backgroundColor: '#BC1399' },
                headerTintColor: '#fff',
                title: 'Все изображения',
                headerTitleAlign: 'center',
              }} />
            <Stack.Screen
              name='Photo'
              component={PhotoScreen}
              options={({ route }) => ({
                title: 'img' + ' - ' + route.params.item.id,  // not everyone has an attr named
                headerStyle: { backgroundColor: '#BC1399' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
              })}
            />
          </Stack.Navigator>
        </NavigationContainer >
      </Provider>
    );
  }
}

export default App;