import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import LinearGradient from "react-native-linear-gradient";
import CustomInput from "../home/CustomInput";

const Register = ({ navigation }) => {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, "Enter at least 2 names")
      .required("Full name is required"),
    phoneNumber: yup
      .string()
      .matches(/()(\d){8}\b/, "Enter a valid phone number")
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });
  return (
    <>
      <LinearGradient
        colors={["darkorchid", "floralwhite"]}
        style={{ flex: 1 }}
      >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.signupContainer}>
            <Text>Sign Up Screen</Text>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                fullName: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={CustomInput}
                    name="fullName"
                    placeholder="Full Name"
                  />
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomInput}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    keyboardType="numeric"
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                  />

                  <Button
                    color="#841584"
                    onPress={() => {
                      handleSubmit();
                      navigation.navigate("Login");
                    }}
                    title="SIGN UP"
                    disabled={!isValid}
                  />
                </>
              )}
            </Formik>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text>Already have Account </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  signupContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "wheat",
    borderRadius:10
  },
  link: {
    color: "blue",
  },
});
