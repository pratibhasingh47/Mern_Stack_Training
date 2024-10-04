import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';
import Vector from './assets/favicon.png';

export default function App() {
  return (
    // <View style = {{ backgroundColor: 'yellow' , width:300, height:300 , padding : 60}} >
    <View style = {{ backgroundColor: 'yellow' ,flex : 1 ,justifyContent: 'center' , alignItems:'center' , fontSize : 30 , padding : 60}} >
      <Text style={{fontSize:50 , color:'green'}}>Hello Prat's</Text>
      <Image source={Vector} style= {{width : 100 , height : 100}}/>
      <Image source={{uri : "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"}} style= {{width : 100 , height : 100}}/>
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
