import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vector from "./assets/splash.png"
import { useState } from 'react';
import Box from './components/Box';

export default function App() {

	const [open, setOpen] = useState(false);


	return (

		<View style={{ backgroundColor: "yellow", justifyContent: 'center', alignItems: 'center', flex: 1, paddingTop: 30 }}>

			{/* <Box/> */}

			<Text style={{ color: "black", fontSize: 25 }}>Hello Prat's </Text>
			{/* <ImageBackground source={Vector} style={{height:100, width:100}}/> */}
			{/* <Image source={{uri:"https://avatars.githubusercontent.com/u/113748706?v=4"}} style={{height:100, width:100}}/> */}

			<Image source={{ uri: "https://i.pinimg.com/originals/65/25/ea/6525ea3430a2145e472ce030dd98bdcb.png" }} style={{ height: 100, width: 100 }} />

			<Button title='Click ME' onPress={() => {
				console.log("Button Clicked");
			}} />

			<Pressable style={{ backgroundColor: 'black', padding: 10 }} onPress={() => { console.log("Pressable component") }} >
				<Text style={{ color: 'white' }} >Pressable Component</Text>
			</Pressable>

			<Button title="Open Model" onPress={() => {
				setOpen(true);
			}} />
			<Modal visible={open} animationType='slide' >
				<Button title='Close Modal' onPress={() => {
					setOpen(false);
				}} />
			</Modal>

			<StatusBar backgroundColor='lightgreen' barStyle='dark-content' />

			{/* <ActivityIndicator size='large' color='midnightblue' animating={true}/> */}

			{/* <Button title='Show Alert' color='midnightblue' onPress={()=>{
        Alert.alert("Invalid Data" , "SubHeading",[
            {
        text : "cancel",
        onPress : ()=>{
                console.log('Cancel clicked')
        }
            },
            {
            text : "Ok",
            onPress : ()=>{
                console.log('Ok clicked')
            }
            }
        ])
        }} /> */}

		</View>



	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});