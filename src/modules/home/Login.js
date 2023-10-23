import { StyleSheet, Text, View , TextInput ,Button ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import LinearGradient from "react-native-linear-gradient";


import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})


const Login = ({navigation}) => {
  return (
    <LinearGradient
        colors={["darkorchid", "floralwhite"]}
        style={{ flex: 1 }}
      >
    <View style={styles.loginContainer}>
          <Text>Login Screen</Text>
          <Formik
             validationSchema={loginValidationSchema}

            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values , errors , isValid ,touched}) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                  {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                 {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }
                <Button 
                  color="#841584"
                  onPress={()=>{
                    handleSubmit();
                    navigation.navigate('Admin'); 
                }} title='Submit'/>
              </>
            )}
          </Formik>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </LinearGradient>

  )
}

export default Login

const styles = StyleSheet.create({

    loginContainer: {
      width: '80%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      elevation: 10,
      backgroundColor: 'wheat',
      justifyContent:'center',
      marginTop:300,
      marginLeft:40,
      borderRadius:10
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
    },
    errorText: {
        fontSize: 10,
        color: 'red',
      },
      link: {
        color: 'blue',
    },
  })