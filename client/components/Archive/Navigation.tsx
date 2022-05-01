import { createStyles } from "@mantine/core";
import React from "react";
import { HeaderLogo } from "../Header";

const useStyles = createStyles({
	nav: {
		borderRadius: "7px",
		backgroundColor: "hsl(30, 100%, 99%)",
	},
});

export function NavigationBar({ children }: { children: React.ReactNode }) {
	const { classes } = useStyles();

	return (
		<>
			<HeaderLogo />
			<nav className={classes.nav}>
				<div>{children}</div>
			</nav>
		</>
	);
}
