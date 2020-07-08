import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import PeopleList from "./src/components/PeopleList";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=5")
      .then((response) => {
        const { results } = response.data;
        this.setState({
          people: results,
        });
      });
  }

  renderList() {
    const textElements = this.state.people.map((people) => {
      const { first } = people.name;
      return <Text key={first}>{first}</Text>;
    });
    return textElements;
  }

  render() {
    return (
      <View>
        <Header title="Pessoas"></Header>
        <PeopleList people={this.state.people} />
      </View>
    );
  }
}
