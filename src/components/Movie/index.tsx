"use client";

import Link from "next/link";
import { MovieData } from "@/globals";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export interface MovieProps
	extends Pick<MovieData, "id" | "title" | "poster_path"> {}

export const Movie = ({ id, title, poster_path }: MovieProps) => {
	const router = useRouter();
	const onClick = useCallback(() => {
		router.push(`/movies/${id}`);
	}, []);

	return (
		<div className={styles["movie"]}>
			<img src={poster_path ?? undefined} alt={title} onClick={onClick} />
			<Link href={`/movies/${id}`}>{title}</Link>
		</div>
	);
};
