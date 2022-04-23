import { Button, createStyles, Group, Popover, SimpleGrid, Text, Image, Stack, Divider } from "@mantine/core";
import React, { useState } from "react";
import { DotsVertical, Bookmarks, Plus, Search, Home2 } from "tabler-icons-react";

const useStyles = createStyles((theme, params, getRef) => ({
	wrapper: {
		display: "flex",
		justifyContent: "right",
	},

	quickbar: {
		display: "flex",
		alignItems: "center",
		padding: "7px",
		borderRadius: "0 0 7px 7px",
		backgroundColor: "hsl(30, 100%, 99%)",
		boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)",
	},

	additionalOptsBtn: {
		padding: "7px 5px 3px",
		backgroundColor: "hsl(30, 100%, 100%)",
		borderRadius: "4px",
		outline: "none",
		border: "none",
		cursor: "pointer",

		"&:hover": {
			backgroundColor: "hsla(30, 100%, 35%, 0.2)",
		},
	},

	additionalOptsBtnWithText: {
		display: "flex",
	},
}));

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
	const { classes, cx } = useStyles();

	return (
		<Group spacing={5}>
			<button className={classes.additionalOptsBtn}>
				<Home2 />
			</button>
			<Divider
				orientation="vertical"
				style={{
					width: "1px",
					height: "auto",
				}}
			/>
			<button className={cx(classes.additionalOptsBtnWithText, classes.additionalOptsBtn)}>
				<Text>Bookmarks</Text>
				<Bookmarks />
			</button>
			<button className={classes.additionalOptsBtn}>
				<Plus />
			</button>
			<Divider
				orientation="vertical"
				style={{
					width: "1px",
					height: "auto",
				}}
			/>
			<AdditionalOptionsPopOver />
		</Group>
	);
}

function AdditionalOptionsPopOver() {
	const [opened, setOpened] = useState(false);
	const { classes } = useStyles();

	const TargetBtn = () => (
		<button onClick={() => setOpened(o => !o)} className={classes.additionalOptsBtn}>
			<DotsVertical />
		</button>
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
