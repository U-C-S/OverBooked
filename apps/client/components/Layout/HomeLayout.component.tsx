import React from "react";
import Styles from "./HomeLayout.module.scss";
import { Header } from "../Header";
import { Button } from "@mantine/core";

export function HomeLayout() {
	return (
		<div className={Styles.parent}>
			<header>
				<div>OverBooked</div>
				<div className={Styles.quickBarContainer}>
					<div className={Styles.quickBar}>
						<p>lol</p>
						<Button type="button">Login</Button>
					</div>
				</div>
			</header>
		</div>
	);
}
