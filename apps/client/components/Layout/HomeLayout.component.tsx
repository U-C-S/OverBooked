import React from "react";
import styles from "./HomeLayout.module.scss";
import { Header } from "../Header";
import { Button } from "@mantine/core";

export function HomeLayout() {
	return (
		<div className={styles.parent}>
			<header>
				<div>OverBooked</div>
			</header>
			<div className={styles.quickBarContainer}>
				<div className={styles.quickBar}>
					<p>lol</p>
					<Button type="button">Login</Button>
				</div>
			</div>

			<nav></nav>

			<main></main>

			<footer></footer>
		</div>
	);
}
