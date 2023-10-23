import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";


const Profile = ({navigation}) => {
  return (
    <LinearGradient
        colors={["darkorchid", "floralwhite"]}
        style={{ flex: 1 }}
      >
        <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Button
          title='Logout'
          color="#841584"
          onPress={()=>{navigation.replace("Login")}}
          />
        </View>
        </View>
      </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create
({
  mainContainer:
  {
    marginTop:350,
    marginLeft:100,
    justifyContent: 'center',
    alignItems: 'center',
    height:200,
    width:200,
    backgroundColor:'wheat'

  },
  container:
  {
    justifyContent: 'center',
    alignItems: 'center',
    
    padding: 10,
    elevation: 10,
  }
})