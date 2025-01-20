interface PageProps {
	params: Promise<{ movieId: string }>;
	searchParams: Promise<{}>;
}

export default async function MovieDetail(props: PageProps) {
	// console.log(props);
	// console.log(await props.params);
	// console.log(await props.searchParams);

	const { movieId } = await props.params;

	return <h1>Movie {movieId}</h1>;
}
