import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="People"></Header>
      </View>
    );
  }
}
