import React,{useState} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi, results, errMsg] = useResults();
    const filterResults = (price)=>{
return results.filter(result => {
    return result.price == price;
});
    };

   // console.log(results);
    return (
        <View style={{flex:1}}>
            <SearchBar term={term} onTermChange = {newTerm => setTerm(newTerm)}
            onTermSubmit ={() => searchApi(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            {/* <Text>results = {results.length}</Text> */}
            <ScrollView>
            <ResultsList results={filterResults('$')} 
            title="Cheap"/>
            <ResultsList results={filterResults('$$')} 
            title="Costly" />
            <ResultsList results={filterResults('$$')} 
            title="Luxury" />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;