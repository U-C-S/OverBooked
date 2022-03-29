import React from "react";
import { Header, QuickBar } from "../Header";
import { Button, Grid } from "@mantine/core";

export function HomeLayout() {
	return (
		<Grid
			gutter={50}
			style={{
				width: "70%",
				margin: "0 auto",
			}}>
			<Grid.Col
				span={4}
				style={{
					paddingTop: "0px",
				}}>
				<header>
					<div>OverBooked</div>
				</header>
			</Grid.Col>

			<Grid.Col
				span={8}
				style={{
					paddingTop: "0px",
					position: "sticky",
					top: "0px",
					left: "0px",
				}}>
				<QuickBar />
			</Grid.Col>

			<Grid.Col span={4}>
				<nav></nav>
			</Grid.Col>

			<Grid.Col
				span={8}
				style={{
					height: "800px",
				}}>
				<main></main>
			</Grid.Col>

			<Grid.Col span={12}>
				<footer></footer>
			</Grid.Col>
		</Grid>
	);
}
