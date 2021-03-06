import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View style={styles.contianer}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.text}>{result.rating} Stars, {result.review_count} Reviews</Text>
      <FlatList 
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}}/>
      }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1
  },
  image:{
      height:200,
      width:300,
      borderRadius: 5,
      margin:10
  },
  name:{
      fontSize:18,
      fontWeight:'bold',
      margin:5,
marginLeft:10
  },
  text:{
    marginLeft:10
  }
});

export default ResultScreen;
