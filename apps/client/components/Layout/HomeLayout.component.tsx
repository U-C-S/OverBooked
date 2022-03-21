import React from "react";
import Styles from "./HomeLayout.module.scss";
import { Header } from "../Header";

export function HomeLayout() {
	return (
		<div className={Styles.parent}>
			<Header />
		</div>
	);
}
