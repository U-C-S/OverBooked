import { Button, createStyles, Stack, Text } from "@mantine/core";
import React from "react";
import { Bookmarks, CodePlus, Home, Rss, Search } from "tabler-icons-react";

const useStyles = createStyles((theme, params, getRef) => ({
	sideBarContainer: {
		height: "auto",
	},

	sideBarBtn: {
		display: "flex",
		justifyContent: "space-between",
		width: "170px",
		padding: "10px 20px",
		outline: "none",
		border: "none",
		backgroundColor: "transparent",
		color: "azure",
		borderRadius: "4px",
		cursor: "pointer",

		"&:hover": {
			color: "hsl(240, 0%, 10%)",
			backgroundColor: "hsla(30, 100%, 85%)",
		},

		div: {
			fontFamily: "Ubuntu",
		},
	},
}));

const ButtonsList = [
	{
		icon: <Home />,
		text: "Home",
	},
	{
		icon: <Search />,
		text: "Search",
	},
	{
		icon: <Bookmarks />,
		text: "Bookmarks",
	},
	{
		icon: <Rss />,
		text: "RSS Feeds",
	},
	{
		icon: <CodePlus />,
		text: "Additional",
	},
];

export function SideBar() {
	const { classes, cx } = useStyles();

	return (
		<Stack align="center" justify="center" spacing="sm" className={classes.sideBarContainer}>
			{ButtonsList.map((button, index) => (
				<button key={index} className={classes.sideBarBtn}>
					{button.icon}
					<Text align="center">{button.text}</Text>
				</button>
			))}
		</Stack>
	);
}
