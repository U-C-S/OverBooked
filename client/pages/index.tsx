import React, { useState } from "react";
import { AppShell, Navbar, MediaQuery, Burger, useMantineTheme, createStyles, Divider } from "@mantine/core";
import { HeaderLogo } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { MainContent } from "../components/Layout/Content";

const useStyles = createStyles(theme => ({
	sidenavbar: {
		backgroundColor: theme.colors.violet[9],
		borderRight: "1px solid hsl(0, 0%, 0%)",
		padding: "0px !important",
	},

	appshell: {
		main: {
			backgroundColor: theme.colors.violet[8],
		},
	},
}));

export default function AppShellDemo() {
	const { classes } = useStyles();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			fixed
			className={classes.appshell}
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 120, lg: 220 }}
					className={classes.sidenavbar}>
					<HeaderLogo />
					<Divider my="sm" style={{ margin: "0px 15px 15px" }} />
					<SideBar />
					<Divider my="sm" style={{ margin: "15px" }} />
				</Navbar>
			}>
			<MainContent />
		</AppShell>
	);
}
