import { NextPage } from "next";
import { ModalsProvider } from "@mantine/modals";
import { HomeLayout } from "../components/Layout";
import { AppShell, createStyles, Grid } from "@mantine/core";
import { Header, HeaderLogo, QuickBar } from "../components/Header";
import { MainContent } from "../components/Layout/Content";
import { NavigationBar } from "../components/Layout/Navigation";
import { SideBar } from "../components/SideBar";

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
					<MainContent />
				</Grid.Col>
			</Grid>
		</ModalsProvider>
	);
};

export default Bookmarks;
