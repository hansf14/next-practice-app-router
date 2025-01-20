import { Metadata } from "next";
import Link from "next/link";
import { API_URL, MovieData } from "@/globals";
import { Movie } from "@/components/Movie";
import styles from "./styles.module.css";

export const metadata: Metadata = {
	title: "Home",
};

async function getMovies() {
	// sleep 5 seconds
	// await new Promise((resolve) => setTimeout(resolve, 5000));

	const response = await fetch(API_URL);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies: MovieData[] = await getMovies();
	return (
		<div className={styles["container"]}>
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					id={movie.id}
					title={movie.title}
					poster_path={movie.poster_path}
				/>
			))}
		</div>
	);
}
