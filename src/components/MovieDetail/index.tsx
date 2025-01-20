import { API_URL } from "@/globals";
import styles from "./styles.module.css";

export async function getMovieDetail({ movieId }: { movieId: string }) {
	const response = await fetch(`${API_URL}/${movieId}`);
	const json = await response.json();
	return json;
}

export async function MovieDetail({ movieId }: { movieId: string }) {
	const movieDetail = await getMovieDetail({ movieId });
	return (
		<div className={styles.container}>
			<img
				src={movieDetail.poster_path}
				alt={movieDetail.title}
				className={styles.poster}
			/>
			<div className={styles.info}>
				<h1 className={styles.title}>{movieDetail.title}</h1>
				<p>⭐{movieDetail.vote_average.toFixed(1)}</p>
				<p>{movieDetail.overview}</p>
				<a
					href={movieDetail.homepage}
					target={"_blank"}
					rel="noopener noreferrer"
				>
					Homepage &rarr;
				</a>
			</div>
		</div>
	);
}
