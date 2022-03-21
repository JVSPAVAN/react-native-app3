import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetails = ({result})=>{
    return (
        <View style={styles.container}>
            <Image source={{uri: result.image_url}}
            style={styles.imagestyle}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles  = StyleSheet.create({
imagestyle:{
    width:250,
    height:120,
    borderRadius:5,
    marginBottom:5
},
name:{
    fontWeight:'bold'
},
container:{
    marginLeft:15
}
});

export default ResultsDetails;