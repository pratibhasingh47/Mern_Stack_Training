import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';

const AdminNavigation = () => {

    const Tab = createBottomTabNavigator();
  return (
    <View>
      {/* <Text>Admin.Navigation</Text> */}
      <Tab.Navigator>

          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='Signup' component={Signup} />
      </Tab.Navigator>
    </View>
  )
}

export default AdminNavigation

const styles = StyleSheet.create({})