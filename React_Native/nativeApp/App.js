import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vector from "./assets/splash.png"
import { useState } from 'react';
import Box from './components/Box';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

	const [open, setOpen] = useState(false);

	const Stack = createNativeStackNavigator();
	const Drawer = createDrawerNavigator();
	const Tab = createBottomTabNavigator();


	return (

		<View style={[styles.container]}>

			<NavigationContainer>
				{/* <Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Login' component={Login} />
				</Stack.Navigator> */}


				{/* <Drawer.Navigator>
					<Drawer.Screen name='Home' component={Home} />
					<Drawer.Screen name='Login' component={Login} />
					<Drawer.Screen name='Signup' component={Signup} />
				</Drawer.Navigator> */}

				<Tab.Navigator>
					<Tab.Screen name='Home' component={Home} />
					<Tab.Screen name='Login' component={Login} />
					<Tab.Screen name='Signup' component={Signup} />
				</Tab.Navigator>

			</NavigationContainer>

		</View>



	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});