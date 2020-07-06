import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import Resultslist from '../components/ResultsList';

const SearchScreen = () => {
	const [ term, setTerm ] = useState("");
	const [searchApi, results, errorMessege] = useResults();

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() =>searchApi(term)}
			/>
			{errorMessege ?<Text>{errorMessege}</Text> :null }
			<Text>We have found {results.length} results</Text>
			<Resultslist />
			<Resultslist />
			<Resultslist />
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
