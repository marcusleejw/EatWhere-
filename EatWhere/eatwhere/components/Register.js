import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import firebase from '../database/Firebase';

export default class Register extends Component {  

  constructor() {
    super();
    this.state = {
        displayName: '',
        email:'',
        password: '',
        isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
      const state = this.state; 
      state[prop] = val; 
      this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
          <View style = {styles.loader}>
              <ActivityIndicator size = "large" color = "#f01d71"/>
          </View>
      )
    }
    return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}> 
        <View style = {styles.container}> 
          <Image source = {require('../assets/EatWhere_Updated.png')} style = { styles.companyLogo}/>
          <TextInput 
              style = {styles.inputStyle}
              placeholder= 'Name'
              value = {this.state.displayName}
              onChangeText = { (val) => this.updateInputVal(val, 'displayName')}
          />
          <TextInput 
              style = {styles.inputStyle}
              placeholder= 'Enter email'
              value = {this.state.email}
              onChangeText = { (val) => this.updateInputVal(val, 'email')}
          />
          <TextInput 
              style = {styles.inputStyle}
              placeholder= 'Enter password'
              value = {this.state.password}                    
              onChangeText = { (val) => this.updateInputVal(val, 'password')}
              maxLength = {15}
              secureTextEntry ={true}
          />
          <Button 
              color='#f01d71'
              title= 'Register!'
              onPress = {() => this.registerUser()}
          />
          <Text
              style = {styles.loginText}
              onPress={() => this.props.navigation.navigate('Login')}>
              Already registered? Click here to login!
          </Text>
        </View>
      </TouchableWithoutFeedback>  
    );
  }
}

const styles = StyleSheet.create ({
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
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
    borderColor: '#f01d71'
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
  