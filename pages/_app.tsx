import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout;

    return (Component.getLayout) ? getLayout(<Component {...pageProps} />)
            :
                (
                    <Layout>    
                        <Component {...pageProps} />
                    </Layout>
                );
}
