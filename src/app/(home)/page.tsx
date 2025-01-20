"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
// 	title: "Home",
// };

export default function Home() {
	const [stateMovies, setStateMovies] = useState<any[]>([]);
	const [stateIsLoading, setStateIsLoading] = useState<boolean>(true);

	const getMovies = async () => {
		const response = await fetch(
			"https://nomad-movies.nomadcoders.workers.dev/movies"
		);
		const json = await response.json();
		setStateMovies(json);
		setStateIsLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>{stateIsLoading ? "Loading..." : JSON.stringify(stateMovies)}</div>
	);
}
