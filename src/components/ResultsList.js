import React  from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';
import ResultScreen from '../screens/ResultScreen';

const ResultsList = ({title, results, navigation}) => {
if(!results.length){
    return null;
}

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text style={styles.titleStyle}>Results: {results.length}</Text> */}
            <FlatList horizontal
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('Result',{id:item.id})}>
                <ResultsDetails result = {item}/>
                </TouchableOpacity>
                );
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

export default withNavigation(ResultsList);