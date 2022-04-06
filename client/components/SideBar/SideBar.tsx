import { Stack, Text } from "@mantine/core";
import React from "react";

export function SideBar() {
	return (
		<Stack>
			<Text>Home</Text>
			<Text>Search</Text>
			<Text>RSS Feed</Text>
			<Text>Bookmarks</Text>
			<Text>Additional</Text>
		</Stack>
	);
}
