import { Button, Center, Grid, Navbar } from "@mantine/core";
import { useModals } from "@mantine/modals";
import React from "react";
import { LoginModal } from "./";

const SubNavComponent = (props: { children: React.ReactChild }) => {
	return (
		<div className="nav-head w-72 bg-slate-500 px-4 py-2 rounded-b-lg justify-center">{props.children}</div>
	);
};

const SignInorUpButton = () => {
	const modals = useModals();

	const openContentModal = () => {
		const id = modals.openModal({
			title: "Login",
			children: <LoginModal />,
		});
	};

	return (
		<Button color="red" size="xs" onClick={openContentModal}>
			Login / SignUp
		</Button>
	);
};

export function NavBarx() {
	return (
		<nav className="flex justify-around m-auto">
			<SubNavComponent>
				<h1 className="text-center text-3xl font-['Segoe_UI']">OverBooked</h1>
			</SubNavComponent>
			<SubNavComponent>
				<>
					<SignInorUpButton />
				</>
			</SubNavComponent>
		</nav>
	);
}
