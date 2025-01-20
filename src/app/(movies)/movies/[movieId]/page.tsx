import { Suspense } from "react";
import { getMovieDetail, MovieDetail } from "@/components/MovieDetail";
import { MovieVideos } from "@/components/MovieVideos";

interface PageProps {
	params: Promise<{ movieId: string }>;
	searchParams: Promise<{}>;
}

export async function generateMetadata(props: PageProps) {
	// console.log(props);
	// console.log(await props.params);
	// console.log(await props.searchParams);

	const { movieId } = await props.params;
	const movieDetail = await getMovieDetail({ movieId });

	return {
		title: movieDetail.title,
	};
}

export default async function MovieDetailPage(props: PageProps) {
	// console.log(props);
	// console.log(await props.params);
	// console.log(await props.searchParams);

	const { movieId } = await props.params;

	return (
		<div>
			<Suspense fallback={<h1>Loading movie info</h1>}>
				<MovieDetail movieId={movieId} />
			</Suspense>
			<Suspense fallback={<h1>Loading movie videos</h1>}>
				<MovieVideos movieId={movieId} />
			</Suspense>
		</div>
	);
}
