import React, { useState } from "react";
import { AppShell, createStyles } from "@mantine/core";
import { SideNavBar } from "../Core";

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

type Props = { children: React.ReactNode | undefined };

export function OverbookedUiShell({ children }: Props) {
	const { classes } = useStyles();
	return (
		<AppShell navbarOffsetBreakpoint="sm" fixed className={classes.appshell} navbar={<SideNavBar />}>
			{children}
		</AppShell>
	);
}
