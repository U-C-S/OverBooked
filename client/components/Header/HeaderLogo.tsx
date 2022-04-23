import { Title } from "@mantine/core";
import React from "react";

export function HeaderLogo() {
	return (
		<header>
			<Title
				align="center"
				style={{
					fontSize: "38px",
					fontFamily: "Amatic SC",
					userSelect: "none",
					height: "60px",
				}}>
				OverBooked
			</Title>
		</header>
	);
}
