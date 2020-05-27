import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";

export default function EatingPlaceOption({ navigation }) {
  const [eatingPlaces, setEatingPlaces] = useState([
    { place: "Deck", stores: { store1: { storeName: "Japanese Cuisine", waitTime: 12, items: {}}}, averageWaitTime: 20, key: "1" },
    { place: "Science", stores: { "1": 13, "2": 16 }, averageWaitTime: 30, key: "2" },
    { place: "UTown", stores: { "1": 14, "2": 17 }, averageWaitTime: 40, key: "3" },
  ]);

  return (
    <View style={styles.container} >
      
      <FlatList
        data={eatingPlaces}
        renderItem={({ item }) => (
          <FlatButton
            styleInput={buttonStyle}
            text={item.place + " Average wait time: " + item.averageWaitTime + "minutes"}
            onPress={() => navigation.navigate("StoreOption", item)}
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
