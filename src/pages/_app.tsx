import { trpc } from "../utils/trpc";

import "../styles/style.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default trpc.withTRPC(MyApp);
