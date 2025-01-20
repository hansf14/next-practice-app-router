export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export interface MovieData {
	adult: boolean;
	backdrop_path: string | null;
	poster_path: string | null;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
