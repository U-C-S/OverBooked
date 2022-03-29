import { Button, createStyles, Text } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
	wrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},

	quickbar: {
		display: "flex",
		alignItems: "center",
		padding: "5px",
		borderRadius: "0 0 5px 5px",
		backgroundColor: "white",
	},
});

export function QuickBar() {
	const { classes } = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.quickbar}>
				<Text>lol</Text>
				<Button type="button" size="xs">
					Login
				</Button>
			</div>
		</div>
	);
}
