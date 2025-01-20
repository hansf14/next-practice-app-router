import { API_URL } from "@/globals";
import styles from "./styles.module.css";

export async function getVideos({ movieId }: { movieId: string }) {
	const response = await fetch(`${API_URL}/${movieId}/videos`);
	const json = await response.json();
	return json;
}

export async function MovieVideos({ movieId }: { movieId: string }) {
	const videos: any[] = await getVideos({ movieId });
	return (
		<div className={styles["container"]}>
			{videos.map((video) => {
				return (
					<iframe
						key={video.id}
						src={`https://youtube.com/embed/${video.key}`}
						title={video.name}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				);
			})}
		</div>
	);
}
