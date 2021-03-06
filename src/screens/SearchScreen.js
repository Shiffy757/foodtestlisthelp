import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";



const SearchScreen = () => {
	const [ term, setTerm ] = useState("");
	const [ searchApi, results, errorMessege ] = useResults();

	const filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$'

		return results.filter((results) => {
			return results.price === price;
		});
	};

	return (
		<>
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
			{errorMessege ? <Text>{errorMessege}</Text> : null}
			<ScrollView>
				<ResultsList results={filterResultsByPrice("$")} title="cost effective"/> 
				<ResultsList results={filterResultsByPrice("$$")} title="bit pricer"/>
				<ResultsList results={filterResultsByPrice("$$$")} title="big spender"/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
