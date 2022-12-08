import HomeInfoCard from "./HomeInfoCard";
import MarketingCard from "./MarketingCard";

const list = [
    { name: "NLNG", imageSrc: "/nlng-logo.png", description: "Well Completion", location: "Port Harcourt, Nigeria" },
    {
        name: "NLNG Oil & Gas Services",
        imageSrc: "/nlng-logo.png",
        description: "Drilling and Production chemicals supply",
        location: "Port Harcourt, Nigeria",
    },
    {
        name: "Petraco Oil Ltd",
        imageSrc: "/petraco-logo.png",
        description: "Mud Logging & Data processing",
        location: "Port Harcourt, Nigeria",
    },
];

export default function MarketingHomeInfoCard() {
    return (
        <HomeInfoCard title="Marketing">
            <div className="flex justify-start gap-6 overflow-x-auto py-4">
                {list.map((it) => (
                    <MarketingCard props={it} key={it.name} />
                ))}
            </div>
        </HomeInfoCard>
    );
}
