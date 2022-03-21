import React  from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({title, results}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text style={styles.titleStyle}>Results: {results.length}</Text> */}
            <FlatList horizontal
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => {
                return <ResultsDetails result = {item}/>
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
titleStyle:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:15,
    marginBottom:5
},
container:{
    marginBottom:10
}
});

export default ResultsList;