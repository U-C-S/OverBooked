import { NextPage } from "next";
import { ModalsProvider } from "@mantine/modals";
import { HomeLayout } from "../components/Layout";

const HomeContent = () => {
	return (
		<>
			<HomeLayout />
		</>
	);
};

const Home: NextPage = () => {
	return (
		<>
			<ModalsProvider>
				<HomeContent />
			</ModalsProvider>
		</>
	);
};

export default Home;
