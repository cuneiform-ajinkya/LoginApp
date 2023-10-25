import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { useRef } from "react";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Admin = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  const [f1, setF1] = useState();
  const [f2, setF2] = useState();
  const [f3, setF3] = useState();
  const [f4, setF4] = useState();

  const generateOtpfunc = () => {
    const min = 1000;
    const max = 9999;

    const otp = Math.floor(Math.random() * (max - min + 1)) + min;

    AsyncStorage.setItem('otp', otp.toString()); 
    console.log(otp);
  };
  const validateOtp = async() => {
    const otp = await AsyncStorage.getItem('otp');
    let enteredOtp = f1 + f2 + f3 + f4;


    if (enteredOtp == otp) {
      Alert.alert("Otp Matched");
    } else {
      Alert.alert("Wrong otp");
    }
  };

  return (
    <LinearGradient colors={["darkorchid", "floralwhite"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.otpVerify}>Otp Verification</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={generateOtpfunc}
            style={styles.generateOtp}
          >
            <Text style={styles.buttonText}>Generate Otp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otpView}>
          <TextInput
            ref={et1}
            value={f1}
            style={[
              styles.textInput,
              { borderColor: (f1 && f1.length >= 1) >= 1 ? "red" : "black" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(txt) => {
              setF1(txt);
              if (txt.length >= 1) {
                et2.current.focus();
              } else if (txt.length < 1) {
                et1.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={et2}
            value={f2}
            style={[
              styles.textInput,
              { borderColor: (f2 && f2.length >= 1) >= 1 ? "red" : "black" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(txt) => {
              setF2(txt);
              if (txt.length >= 1) {
                et3.current.focus();
              } else if (txt.length < 1) {
                et1.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={et3}
            value={f3}
            style={[
              styles.textInput,
              { borderColor: (f3 && f3.length >= 1) >= 1 ? "red" : "black" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(txt) => {
              setF3(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et2.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={et4}
            value={f4}
            style={[
              styles.textInput,
              { borderColor: (f4 && f4.length >= 1) >= 1 ? "red" : "black" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(txt) => {
              setF4(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et3.current.focus();
              }
            }}
          ></TextInput>
        </View>

        <View>
          <TouchableOpacity
            onPress={validateOtp}
            disabled={
              f1 !== "" && f2 !== "" && f3 !== "" && f4 !== "" ? false : true
            }
            style={[
              styles.verifyOtp,
              {
                backgroundColor:
                  f1 !== "" && f2 !== "" && f3 !== "" && f4 !== ""
                    ? "lightyellow"
                    : "gray",
              },
            ]}
          >
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
  },
  otpVerify: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 100,
    alignSelf: "center",
    color: "#000",
  },
  otpView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
    marginRight: 35,
  },
  textInput: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  verifyOtp: {
    flexDirection: "row",
    height: 55,
    width: 120,
    backgroundColor: "lightyellow",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
  },
  generateOtp: {
    flexDirection: "row",
    height: 55,
    width: 120,
    backgroundColor: "lightyellow",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
