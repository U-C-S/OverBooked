import { Grid, Group } from "@mantine/core";
import React from "react";
import { HeaderLogo } from "./HeaderLogo";
import { QuickBar } from "./QuickBar";

export function Header() {
	return (
		<Grid columns={12} gutter={0}>
			<Grid.Col span={3}>
				<HeaderLogo />
			</Grid.Col>
			<Grid.Col span={8}>
				<QuickBar />
			</Grid.Col>
		</Grid>
	);
}
