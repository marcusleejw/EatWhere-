import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  } from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";

export default function FoodDetails({ route, navigation }) {
    
    const { item1 } = route.params;
    const { item2 } = route.params;


    return (
    <View style={styles.container} >
        <FlatButton 
        styleInput= {buttonStyle}
        text = { item1 }
        onPress = {() => navigation.navigate('Cart')}
        />
        <FlatButton 
        styleInput= {buttonStyle}
        text = { item2 }
        
        />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 50,
    backgroundColor: "#fff",
  },
});

const buttonStyle = StyleSheet.create({
  button: {
    borderRadius: 8,
    marginVertical: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "pink",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
