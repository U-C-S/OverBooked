import { NextPage } from "next";
import { ModalsProvider } from "@mantine/modals";
import { HomeLayout } from "../components/Layout";

const Home: NextPage = () => {
	return (
		<>
			<ModalsProvider>
				<HomeLayout />
			</ModalsProvider>
		</>
	);
};

export default Home;
