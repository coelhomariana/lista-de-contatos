import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PeopleList = (props) => {
  const { people } = props;
  const textElements = people.map((people) => {
    const { first } = people.name;
    return (
      <View key={first} style={styles.line}>
        <Text>{first}</Text>
      </View>
    )
  });

  return <View style={styles.container}>{textElements}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff",
  },

  line: {
    height: 40
  }
});

export default PeopleList;
