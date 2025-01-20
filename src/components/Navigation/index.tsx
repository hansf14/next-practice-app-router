"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

export function Navigation() {
	const path = usePathname();
	// console.log(path);

	return (
		<nav className={styles["nav"]}>
			<ul>
				<li>
					<Link href="/">Home {path === "/" ? "🔥" : ""}</Link>
				</li>
				<li>
					<Link href="/about-us">
						About Us {path === "/about-us" ? "🔥" : ""}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
