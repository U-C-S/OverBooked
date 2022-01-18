import "./assets/index.css";
import { Component, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import TheRoutes from "./pages";

const Routes = useRoutes(TheRoutes);

const App: Component = () => {
	return (
		<Router>
			<Suspense>
				<Routes />
			</Suspense>
		</Router>
	);
};

render(() => <App />, document.getElementById("root") as HTMLElement);
