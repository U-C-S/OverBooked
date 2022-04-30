import { Title } from "@mantine/core";
import React from "react";

export function HeaderLogo() {
	return (
		<header>
			<Title
				align="center"
				style={{
					fontSize: "40px",
					fontFamily: "Amatic SC",
					userSelect: "none",
					padding: "10px 5px 20px",
					color: "hsl(30, 100%, 85%)",
				}}>
				OverBooked
			</Title>
		</header>
	);
}
