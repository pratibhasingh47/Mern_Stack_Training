import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Button title="Login" onPress={() => { navigation.navigate("Login") }} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})