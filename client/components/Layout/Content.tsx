import { createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
	main: {
		backgroundColor: "hsl(30, 30%, 80%)",
		minHeight: "100vh",
		h1: {
			margin: "0",
			fontFamily: "Ubuntu",
			textAlign: "center",
		},
	},
});

export function MainContent() {
	const { classes } = useStyles();

	return (
		<main className={classes.main}>
			<div>
				<h1>Bookmarks</h1>
			</div>
		</main>
	);
}
