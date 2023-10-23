import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Maintenance from '../modules/home/Maintenance'
import Login from '../modules/home/Login'
import Register from '../modules/home/Register'
import Profile from '../modules/home/Profile'
import Admin from '../modules/home/Admin'



const Index = () => {
    const [isMaintenance , setIsMaintenance] = useState(false)
    
    

  return (
    
    <Stack.Navigator>
        {isMaintenance ?(
        <Stack.Screen
        name='Maintenance'
        component={Maintenance}
        options={{headerShown:false}}/>
        )
        :
        <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown:false}}/>
}
        <Stack.Screen
        name='Register'
        component={Register}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='Profile'
        component={Profile}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='Admin'
        component={Admin}
        options={{headerShown:false}}/>
         
    </Stack.Navigator>
  )
}

export default Index

const styles = StyleSheet.create({})