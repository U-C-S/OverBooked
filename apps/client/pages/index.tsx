import { NextPage } from "next";
import { ModalsProvider } from "@mantine/modals";
import { NavBarx } from "../components";

const HomeContent = () => {
	return (
		<>
			<main className="w-2/3 m-auto">
				<NavBarx />
			</main>
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
