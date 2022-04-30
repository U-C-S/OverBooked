import React, { useState } from "react";
import { AppShell, Navbar, MediaQuery, Burger, useMantineTheme, createStyles } from "@mantine/core";
import { HeaderLogo } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { MainContent } from "../components/Layout/Content";

const useStyles = createStyles({
	sidenavbar: {
		backgroundColor: "hsl(240, 0%, 10%)",
		borderRight: "1px solid hsl(0, 0%, 0%)",
	},
});

export default function AppShellDemo() {
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			fixed
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 120, lg: 230 }}
					className={classes.sidenavbar}>
					<HeaderLogo />
					<SideBar />
				</Navbar>
			}>
			<MainContent />
		</AppShell>
	);
}
