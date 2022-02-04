import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider>
			<Component {...pageProps} />
		</MantineProvider>
	);
}
