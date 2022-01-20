import { lazy } from "solid-js";
import { RouteDefinition, Navigate } from "solid-app-router";

const TheRoutes: RouteDefinition[] = [
	{
		path: "/",
		component: lazy(() => import("./home")),
	}
];

export default TheRoutes;
