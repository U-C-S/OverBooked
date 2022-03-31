import { createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
	footer: {
		borderRadius: "7px 7px 0 0",
		backgroundColor: "hsl(30, 100%, 99%)",
		boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)",
		height: "80px",
		width: "67.4%",
		margin: "25px auto 0",
	},
});

export function Footer() {
	const { classes } = useStyles();

	return (
		<footer className={classes.footer}>
			<div></div>
		</footer>
	);
}
