import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} 
          options={{
            headerLeft: () => <Text>Hello</Text>,
            title: 'Pexels App'
          }}
        />
        <Stack.Screen name='ImageScreen' component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}

