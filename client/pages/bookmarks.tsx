import { NextPage } from "next";
import { ModalsProvider } from "@mantine/modals";
import { AppShell, createStyles, Grid } from "@mantine/core";
import { HeaderLogo, SideBar } from "../components/Core";

const useStyles = createStyles({
	sidenavbar: {
		backgroundColor: "hsl(240, 0%, 10%)",
		borderRight: "1px solid hsl(0, 0%, 0%)",
	},
});

const Bookmarks: NextPage = () => {
	const { classes } = useStyles();

	return (
		<ModalsProvider>
			<Grid columns={20} gutter={0}>
				<Grid.Col span={3} className={classes.sidenavbar}>
					<HeaderLogo />
					<SideBar />
				</Grid.Col>
				<Grid.Col span={17}>
					<h1>Bookmarks</h1>
				</Grid.Col>
			</Grid>
		</ModalsProvider>
	);
};

export default Bookmarks;
