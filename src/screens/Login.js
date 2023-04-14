import React, { useContext } from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native'
import CustomInput from '../components/CustomInput'
import { FontContext } from '../context/FontContext'
import ButtonCom from '../components/ButtonCom'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export default function Login(props) {
  const {fontsLoaded} = useContext(FontContext);

  const handleLogin = (values) => {
    console.log(values);
    props.navigation.navigate("TabNavigation");
  };

  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <ScrollView style={styles.mainBox}>
        {fontsLoaded && 
          <>
            <Text style={[styles.MainTextStyle, {fontFamily: "Roboto-Bold"}]}>Welcome to D'paragon</Text>
            <Text style={[styles.enterStartText, {fontFamily: "Roboto-Regular"}]}>Enter to start</Text>

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                  <Text style={[styles.EmailText, {fontFamily: "Roboto-Regular"}]}>Email</Text>
                  <CustomInput 
                    placeholder="example@mail.com"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && <Text style={[styles.errorTextStyle, {fontFamily: "Roboto-Regular"}]}>{errors.email}</Text>}


                  <Text style={[styles.EmailText, {fontFamily: "Roboto-Regular"}]}>Password</Text>
                  <CustomInput 
                    placeholder="8+ password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={true}
                  />
                  {touched.password && errors.password && <Text style={[styles.errorTextStyle, {fontFamily: "Roboto-Regular"}]}>{errors.password}</Text>}
                  <ButtonCom
                    title="LOGIN"
                    style={[styles.loginBtnStyle, touched.email && touched.password && !errors.password && !errors.email && {backgroundColor: "#4B84F1"}]}
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
  
            <Text style={[styles.orTextStyle, {fontFamily: "Roboto-Regular"}]}>OR</Text>
  
            <ButtonCom
              title="LOGIN WITH PHONE NUMBER"
              style={styles.loginPhoneStyle}
              styleText={{
                color: "#515252"
              }}
            />

            <View style={styles.accountRegisterBox}>
              <Text style={[styles.accountText ,{fontFamily: "Roboto-Regular"}]}>Do not have an account?</Text>
              <TouchableOpacity>
                <Text style={[styles.registerTextBtn ,{fontFamily: "Roboto-Bold"}]}>  Register</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={[styles.registerTextBtn ,{fontFamily: "Roboto-Bold", marginLeft: 3}]}>Forgot Password ?</Text>
            </TouchableOpacity>
          </>
        }
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
  mainBox: {
    marginHorizontal: 15,
    marginTop: 60,
  },
  MainTextStyle: {
    color: '#000',
    fontSize: 22,
    fontWeight: "500" 
  },
  enterStartText: {
    color: '#515252',
    fontSize: 16,
    marginTop: 10
  },
  EmailText: {
    color: "#8F9090",
    marginTop: 15,
    fontSize: 16,
    marginBottom: 7
  },
  loginBtnStyle: {
    backgroundColor: "#A5C2F8",
    marginVertical: 30
  },
  orTextStyle: {
    fontSize: 13,
    textAlign: "center",
    marginTop: -5
  },
  loginPhoneStyle: {
    borderWidth: 1,
    borderColor: "#515252",
    marginVertical: 25,
    backgroundColor: "#fff"
  },
  accountRegisterBox: {
    flexDirection: "row"
  },
  accountText: {
    marginLeft: 3
  },
  registerTextBtn: {
    color: "#4B84F1"
  },
  errorTextStyle: {
    color: "red"
  }
})