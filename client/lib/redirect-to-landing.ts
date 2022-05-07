import { useEffect } from "react";
import { useRouter } from "next/router";

export function RedirectToLanding() {
	const router = useRouter();

	useEffect(() => {
		if (!localStorage.getItem("jwttoken")) {
			router.push("/landing");
		}
	}, []);

	return null;
}
