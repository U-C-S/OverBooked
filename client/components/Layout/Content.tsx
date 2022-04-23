import { createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
	main: {
		borderRadius: "7px 0 0 0",
		backgroundColor: "hsl(30, 100%, 99%)",
		boxShadow: "inset 0px 0px 4px rgba(0, 0, 0, 0.4), 0px 0px 2px rgba(0, 0, 0, 0.4)",
		minHeight: "calc(100vh - 60px)",
		h1: {
			margin: "0",
		},
	},
});

export function MainContent() {
	const { classes } = useStyles();

	return (
		<main className={classes.main}>
			<div>
				<h1>WHAT THE HELL IS THIS. AM I CRAZY OR THE WORLD IS ?</h1>
			</div>
		</main>
	);
}
