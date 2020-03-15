import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Le Feed',
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Bradley Hand',
          },
          headerRight: () => (
            <Icon
              name="settings"
              size={24}
              onPress={() => alert('Settings')}
              color="white"
              containerStyle={{ paddingHorizontal: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen name="Comments">
        {() => (
          <View>
            <Text>Some Comments</Text>
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default RootNavigator;
