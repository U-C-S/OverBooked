import { Title } from "@mantine/core";
import React from "react";

export function HeaderLogo() {
	return (
		<header>
			<Title
				align="center"
				order={1}
				style={{
					fontSize: "40px",
					userSelect: "none",
					padding: "8px 0px",
				}}
				sx={theme => ({
					color: theme.colors.red[6],
				})}>
				OverBooked
			</Title>
		</header>
	);
}
