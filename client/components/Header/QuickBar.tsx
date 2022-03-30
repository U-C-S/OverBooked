import { Button, createStyles, Group, SimpleGrid, Text } from "@mantine/core";
import React from "react";

const useStyles = createStyles({
	wrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "right",
	},

	quickbar: {
		display: "flex",
		alignItems: "center",
		padding: "10px",
		borderRadius: "0 0 7px 7px",
		backgroundColor: "hsl(30, 100%, 99%)",
		boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)",
	},
});

export function QuickBar() {
	const { classes } = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.quickbar}>
				<Group spacing={10}>
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
