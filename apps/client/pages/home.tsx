import { NextPage } from "next";
import { LoginModal } from "../components/modals";
import { ModalsProvider, useModals } from "@mantine/modals";

const HomeContent = () => {
	const modals = useModals();

	const openContentModal = () => {
		const id = modals.openModal({
			title: "Login",
			children: <LoginModal />,
		});
	};

	return (
		<>
			<nav>
				<div className="flex justify-around">
					<div className="bg-slate-200 shadow">
						<h1>Clink!</h1>
					</div>
					<div>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							onClick={openContentModal}>
							Login/SignUp
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

const Home: NextPage = () => {
	return (
		<ModalsProvider>
			<HomeContent />
		</ModalsProvider>
	);
};

export default Home;
