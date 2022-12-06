import Navbar from "../components/Navbar";
import type { ReactNode } from "react";
import TopBar from "../components/TopBar";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <TopBar />
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
