import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import type { Page } from "../types";

type Props = AppProps & {
    Component: Page;
};

export default function App({ Component, pageProps }: Props) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return Component.getLayout ? (
        getLayout(<Component {...pageProps} />)
    ) : (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
