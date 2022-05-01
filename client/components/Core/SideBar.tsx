import { Button, createStyles, Divider, Menu, Navbar, Space, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { Bookmarks, CodePlus, Home, Logout, Rss, Search, Settings, User } from "tabler-icons-react";
import { HeaderLogo } from "./HeaderLogo";

const useStyles = createStyles((theme, params, getRef) => ({
	sideBarContainer: {
		height: "auto",
	},

	sidenavbar: {
		backgroundColor: theme.colors.violet[9],
		borderRight: "1px solid hsl(0, 0%, 0%)",
	},

	sideBarBtn: {
		display: "flex",
		width: "100%",
		margin: "0px auto",
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
];

export function SideBarButtons() {
	const { classes, cx } = useStyles();

	return (
		<>
			<Stack align="center" justify="center" spacing={8} className={classes.sideBarContainer}>
				{ButtonsList.map((button, index) => (
					<button key={index} className={classes.sideBarBtn}>
						{button.icon}
						<Text align="center">{button.text}</Text>
					</button>
				))}
			</Stack>
		</>
	);
}

export function ProfileButton() {
	const { classes, cx } = useStyles();

	return (
		<Menu
			position="right"
			placement="end"
			gutter={14}
			withArrow
			control={
				<button className={classes.sideBarBtn}>
					<User />
					<Text align="center">Profile</Text>
				</button>
			}>
			<Menu.Item icon={<Settings />}>Options</Menu.Item>
			<Menu.Item icon={<Logout />}>Logout</Menu.Item>
		</Menu>
	);
}

export function SideNavBar() {
	const { classes, cx } = useStyles();
	const [opened, setOpened] = useState(false);

	return (
		<Navbar
			p={8}
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 120, lg: 220 }}
			className={classes.sidenavbar}>
			<Stack spacing={10}>
				<HeaderLogo />
				<Divider />
				<SideBarButtons />
				<Divider />
				<Space h={468} />
				<Divider />
				<ProfileButton />
			</Stack>
		</Navbar>
	);
}
