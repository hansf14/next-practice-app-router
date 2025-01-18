import Link from "next/link";

export function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about-us">About Us</Link>
				</li>
			</ul>
		</nav>
	);
}
