import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen  from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen'



const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IndexScreen" component={IndexScreen}/>
        <Stack.Screen name = "ShowScreen" component={ShowScreen}/>
        <Stack.Screen name = "CreateScreen" component={CreateScreen}/>
        <Stack.Screen name = "EditScreen" component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}