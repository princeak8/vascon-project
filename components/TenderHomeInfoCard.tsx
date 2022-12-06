import HomeInfoCard from "./HomeInfoCard";
import type { TenderOpportunity } from "../types";
import TenderOpportunityCard from "./TenderOpportunityCard";

const tenderOpportunities: TenderOpportunity[] = [
    {
        logoImageRef: "/nlng-logo.png",
        heading: "Nigeria LNG Limited",
        description: "Provision Of Waste Management Services For Offshore And Benin Operations",
        refNumber: "WthYA60KI3e",
    },
    {
        logoImageRef: "/nlng-logo.png",
        heading: "Nigeria LNG Limited",
        description:
            "Provision Of Welding Qa/qc And Ndt Services Nigeria LNG Limited is a liquefied natural gas Operator Of The NNPC/MPN Joint Venture",
        refNumber: "WthYA60KI399e",
    },
    {
        logoImageRef: "/shafa-logo.png",
        heading: "Nigeria LNG Limited",
        description:
            "Provision Of Fpso Integrity And Specialized Pipelines Inspection & Maintenance Services On Bonga Shafa Nigeria Exploration And Production Company Limited",
        refNumber: "WthYA60xKI3e",
    },
];

export default function TendersHomeInfoCard() {
    return (
        <HomeInfoCard title="Tenders">
            <div className="flex flex-col gap-4">
                {tenderOpportunities.map((opportunity) => (
                    <TenderOpportunityCard opportunity={opportunity} key={opportunity.refNumber} />
                ))}
            </div>
        </HomeInfoCard>
    );
}
