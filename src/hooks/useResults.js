import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [ results, setResults ] = useState([]);
	const [ errorMessege, setErrorMessege ] = useState("");

	const searchApi = async (searchTerm) => {
		console.log("hi there");
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose"
				}
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessege("Somthing went wrong");
		}
	};

	//cal searchApi when component
	//is first rendered
	//searchApi('pasta')
	useEffect(() => {
		searchApi("Steak");
	}, []);

	return [ searchApi, results, errorMessege ];
};
