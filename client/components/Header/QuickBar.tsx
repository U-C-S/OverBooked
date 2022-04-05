import { Button, createStyles, Group, Popover, SimpleGrid, Text, Image, Stack } from "@mantine/core";
import React, { useState } from "react";
import { DotsVertical } from "../../lib/svg-icons";

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

	additionalOpts: {
		padding: "0px",
	},
});

function NotLoggedIn() {
	return (
		<Group spacing={10}>
			<Button type="button" size="xs">
				Login
			</Button>
			<Button type="button" size="xs">
				SignUp
			</Button>
		</Group>
	);
}

function LoggedIn() {
	return (
		<Group spacing={10}>
			<AdditionalOptionsPopOver />
		</Group>
	);
}

function AdditionalOptionsPopOver() {
	const [opened, setOpened] = useState(false);

	const TargetBtn = () => (
		<Button onClick={() => setOpened(o => !o)}>
			<DotsVertical />
		</Button>
	);

	return (
		<Popover
			opened={opened}
			onClose={() => setOpened(false)}
			target={<TargetBtn />}
			width={260}
			position="bottom">
			<Stack align="center">
				<Text size="sm">This UI is made possibe by Mantine. Yes, It's Awesome to use</Text>
				<Button type="button" size="xs">
					Logout
				</Button>
			</Stack>
		</Popover>
	);
}

export function QuickBar() {
	const { classes } = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.quickbar}>
				<LoggedIn />
			</div>
		</div>
	);
}
