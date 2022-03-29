import { Button, createStyles, Group, SimpleGrid, Text } from "@mantine/core";
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
				<Group spacing={5}>
					<Text>lol</Text>
					<Button type="button" size="xs">
						Login
					</Button>
					<Button type="button" size="xs">
						SignUp
					</Button>
				</Group>
			</div>
		</div>
	);
}
