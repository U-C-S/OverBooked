import { createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
	main: {
		minHeight: "100vh",
		h1: {
			margin: "0",
			textAlign: "center",
		},
	},
});

export function MainContent() {
	const { classes } = useStyles();

	return (
		<div className={classes.main}>
			<h1>Bookmarks</h1>
		</div>
	);
}
