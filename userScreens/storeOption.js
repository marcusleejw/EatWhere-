import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  } from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";
import Header from '../shared/header'

export default function StoreOption({ navigation }) {

  const [stores, setStores] = useState([
    {store: 'Japanese Cuisine', waitTime: 15, menu: {item1:'Chicken Katsu', item2:'Terriyaki Chicken'}, key: '1'},
    {store: 'Chicken Rice', waitTime: 10, menu: {item1: 'White Chicken Rice', item2:'Roasted Chicken Rice'}, key: '2'},
    {store: 'Yong Tau Foo', waitTime: 10, menu: {item1: 'noodles', item2:'rice'}, key: '3'}
]);

  return (
    <View style={styles.container} >
      <FlatList
        data={stores}
        renderItem={({ item }) => (
          <FlatButton
            styleInput={buttonStyle}
            text={item.store+ " Average wait time: " + item.waitTime + " minutes"}
            onPress={() => navigation.navigate('FoodDetails', item.menu)}
          />
        )}
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
