import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import firebase from '../database/Firebase';




export default class Login extends Component {

  constructor() {
      super();
      this.state = {
          email: '',
          password: '',
          isLoading: false
      }
  }

  updateInputVal = (val, prop) => {
      const state = this.state; 
      state[prop] = val; 
      this.setState(state);
  }

  userLogin = () => {
      if(this.state.email === '' && this.state.password === '') {
        Alert.alert('Enter details to log in!')
      } else {
        this.setState({
          isLoading: true,
        })
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '', 
            password: ''
          })
          this.props.navigation.navigate('Logout')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }
    }
  
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }    
      return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss} > 
          <View style={styles.container}>  
            <Image source = {require('../assets/EatWhere_Updated.png')} style = { styles.companyLogo}/>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              value={this.state.email}
              onChangeText={(val) => this.updateInputVal(val, 'email')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(val) => this.updateInputVal(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />   
            <Button
              color="#f01d71"
              title="Log in"
              onPress={() => this.userLogin()}
            />   
    
            <Text 
              style={styles.registerText}
              onPress={() => this.props.navigation.navigate('Register')}>
              Don't have account? Click here to Register
            </Text>                          
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }
  
const styles = StyleSheet.create({
  container: {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 35,
  backgroundColor: '#fff'
  },
  inputStyle: {
  width: '100%',
  marginBottom: 15,
  paddingBottom: 15,
  alignSelf: "center",
  borderColor: "#ccc",
  borderBottomWidth: 1
  },
  registerText: {
  color: '#f01d71',
  marginTop: 25,
  textAlign: 'center'
  },
  preloader: {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff'
  },
  companyLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 75,
    backgroundColor: 'transparent',
    marginBottom: 30
  }
});