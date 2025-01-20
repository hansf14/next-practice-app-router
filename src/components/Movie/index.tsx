"use client";

import Link from "next/link";
import { MovieData } from "@/globals";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export type MovieProps = Pick<MovieData, "id" | "title" | "poster_path">;

export const Movie = ({ id, title, poster_path }: MovieProps) => {
	const router = useRouter();
	const onClick = useCallback(() => {
		router.push(`/movies/${id}`);
	}, [id, router]);

	return (
		<div className={styles["movie"]}>
			<img src={poster_path ?? undefined} alt={title} onClick={onClick} />
			<Link href={`/movies/${id}`} prefetch>
				{title}
			</Link>
		</div>
	);
};
