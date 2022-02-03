import { NextPage } from "next";
import { useState } from "react";
import ModalDialog, { LoginModal } from "../components/modals";

const Home: NextPage = () => {
	let [showdiag, setShowdiag] = useState(false);

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
							onClick={() => setShowdiag((prev) => !prev)}>
							Login/SignUp
						</button>
						<ModalDialog show={showdiag} closeCallBack={setShowdiag}>
							<LoginModal />
						</ModalDialog>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Home;
