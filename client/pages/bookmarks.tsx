import { NextPage } from "next";
import { ModalsProvider } from "@mantine/modals";
import { HomeLayout } from "../components/Layout";
import { AppShell, createStyles, Grid } from "@mantine/core";
import { Header, QuickBar } from "../components/Header";
import { MainContent } from "../components/Layout/Content";
import { NavigationBar } from "../components/Layout/Navigation";
import { SideBar } from "../components/SideBar";

const useStyles = createStyles({});

const Bookmarks: NextPage = () => {
	const { classes } = useStyles();

	return (
		<ModalsProvider>
			<Grid columns={20} gutter={0}>
				<Grid.Col span={20}>
					<Header />
				</Grid.Col>
				<Grid.Col span={3}>
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
