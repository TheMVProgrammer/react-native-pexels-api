import { Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import pexelsLogo from './assets/pexels.jpg'
import { useState } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen' 
          options={{
            headerLeft: () => <Image source={pexelsLogo} style={styles.logo}/>,
            headerRight: () => (
              <Text 
              style={{color: 'white', fontSize: 18}}
              onPress={() => setOpenSearch(!openSearch)}
            >
            {openSearch ? 'Close' : 'Search'}
            </Text>
            ),
            title: 'Pexels App',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#0d0d0d',
            }
          }}
        > 
        {(props) => <HomeScreen {...props} openSearch={openSearch}/>}
        </Stack.Screen>
        <Stack.Screen name='ImageScreen' component={ImageScreen} 
          options={{
            title: 'Pexels App',
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#0d0d0d',
            }
          }}
        />
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5
  }
})
