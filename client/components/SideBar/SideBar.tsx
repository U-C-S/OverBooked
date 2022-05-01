import { Button, createStyles, Stack, Text } from "@mantine/core";
import React from "react";
import { Bookmarks, CodePlus, Home, Rss, Search } from "tabler-icons-react";

const useStyles = createStyles((theme, params, getRef) => ({
	sideBarContainer: {
		height: "auto",
	},

	sideBarBtn: {
		display: "flex",
		width: "170px",
		padding: "5px 10px",
		outline: "none",
		border: "none",
		backgroundColor: "transparent",
		color: theme.colors.orange[0],
		borderRadius: "4px",
		cursor: "pointer",
		transition: "all 0.1s linear",

		"&:hover": {
			backgroundColor: theme.colors.blue[4],
		},

		div: {
			padding: "2px 0 0 12px",
			fontFamily: "Nunito, sans-serif",
			fontSize: "14px",
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
