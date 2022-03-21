import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgraound}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder="Search" 
      value={term} onChangeText={newTerm => onTermChange(newTerm)}
      autoCapitalize="none" autoCorrect={false}
      onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgraound: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
