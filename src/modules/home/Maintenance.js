import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";


const Maintenance = () => {
  return (
    <LinearGradient
    colors={["wheat", "darkorchid"]}
    style={{ flex: 1 }}
  >
    <View style={styles.container}>
      
        <View style={styles.mainText}>
      <Text style={styles.text}>Maintenance is going on </Text>
      <Text style={styles.text}>Sorry for Incoviniance</Text> 
      </View>
      <View>
        
      </View>
    </View>
    </LinearGradient>

  )
}

export default Maintenance

const styles = StyleSheet.create
({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:'20%'
    },
    mainText:
    {
        alignItems:'center',

    },
    text:
    {
        fontWeight:'bold',
        fontSize:30
    },
    image1:
    {
        height:200,
        width:200
    }
})