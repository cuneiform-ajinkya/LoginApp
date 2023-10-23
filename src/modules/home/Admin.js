import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from "react-native-linear-gradient";

const Admin = ({ navigation }) => {

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
  };

  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const checkOTP = () => {
    const enteredOTP = otp.join(''); 

    if (enteredOTP === generatedOTP) {
      Alert.alert('OTP Matched');
    } else {
      Alert.alert('OTP Doesn\'t Match');
    }
  };

  const generatedOTP = generateOTP();

  return (
    <LinearGradient
      colors={["darkorchid", "floralwhite"]}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableOpacity>
          <Button
            title='Get OTP'
            color='#841584'
            onPress={() => { console.log(generateOTP()) }} />
        </TouchableOpacity>
        <View style={styles.mainText}>
          <View style={styles.otpContainer}>
            {[...Array(6)].map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index]}
                onChangeText={(value) => handleOtpChange(value, index)}
              />
            ))}
          </View>
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity onPress={() => checkOTP()} style={styles.verifyButton}>
            <Text style={styles.text2}>Verify OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.logoutButton}>
            <Text style={styles.text2}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Admin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16
  },
  verifyButton: {
    backgroundColor: '#841584',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10
  },
  logoutButton: {
    backgroundColor: '#841584',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  otpInput: {
    fontSize: 30,
    height: 50,
    width: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    marginHorizontal: 5
  },
});
