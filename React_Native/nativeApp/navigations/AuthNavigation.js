import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home';  
import Cart from '../components/Cart';
import Login from '../components/Login';
import Signup from '../components/Signup';


const AuthNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <View>
            {/* <Text>AuthNavigation</Text> */}

            <Tab.Navigator>
                    
                    <Tab.Screen name='Home' component={Home} />
                    <Tab.Screen name='Cart' component={Cart} />
                    <Tab.Screen name='Login' component={Login} />
                    <Tab.Screen name='Signup' component={Signup} />
            </Tab.Navigator>

        </View>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})