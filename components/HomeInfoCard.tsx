import type { ReactNode } from "react";
import HomeInfoCardHeading from "./HomeInfoCardHeading";

interface Props {
    children: ReactNode;
    title: string;
}

export default function HomeInfoCard({ children, title }: Props) {
    return (
        <div className="rounded-lg bg-white px-6 pt-5 pb-9 shadow-[0px_7px_20px_rgba(164,_164,_164,_0.25)]">
            <HomeInfoCardHeading title={title} />
            {children}
        </div>
    );
}
