import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app'

const Layout = ({ children }: AppProps) => {
    return (
        <div className="bg-body">
            <TopBar />
            <Navbar />
            { children }
        </div>
    )
}



export default Layout;