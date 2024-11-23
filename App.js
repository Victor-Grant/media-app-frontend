import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/pages/HomePage';
import NewPage from './src/pages/NewPage';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const ScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false, 
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#41436A',
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: Platform.OS === 'ios' ? 20 : 0
  }
}

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={ScreenOptions}>
        <Tab.Screen name='Home' component={HomePage} options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabIcons}>
                <AntDesign name="home" size={24} color={focused ? '#fe9677' : 'white'} />
                <Text style={{color: focused ? '#fe9677' : 'white', fontSize: 11}}>Home</Text>
              </View>
            )
          }
        }}/>
        <Tab.Screen name='New' component={NewPage} options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabIcons}>
                <AntDesign name="pluscircle" size={24} color={focused ? '#fe9677' : 'white'} />
                <Text style={{color: focused ? '#fe9677' : 'white', fontSize: 11}}>New</Text>
              </View>
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  tabIcons: {
    alignItems: 'center'
  }
});
