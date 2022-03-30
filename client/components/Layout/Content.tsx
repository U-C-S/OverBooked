import { createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
	main: {
		borderRadius: "7px",
		backgroundColor: "hsl(30, 100%, 99%)",
		boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)",
		minHeight: "600px",
		height: "100%",
	},
});

export function MainContent() {
	const { classes } = useStyles();

	return (
		<main className={classes.main}>
			<div></div>
		</main>
	);
}
