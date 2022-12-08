import HomeInfoCard from "./HomeInfoCard";
import type { ServiceItem } from "../types";
import ServiceCard from "./ServiceCard";

const services: ServiceItem[] = [
    {
        imageSrc: "/service-spare.png",
        name: "Spare Parts",
        description: "Original manufacturers' spare parts for the plant's lifecycle",
        company: "Petraco Oil Ltd",
    },
    {
        imageSrc: "/service-revamp.png",
        name: "Revamping & Upgrades",
        description: "Enhancing equipment life for higher efficiency, reliability, safety",
        company: "NPDC",
    },
    {
        imageSrc: "/service-repair.png",
        name: "Repairs",
        description: "Enhancing equipment life for higher efficiency, reliability, safety",
        company: "NLNG",
    },
    {
        imageSrc: "/service-diagnostics.png",
        name: "Diagnostics & Remote Mon.",
        description: "Solutions and Products for remote monitoring of plants and drives",
        company: "Petraco Oil Ltd",
    },
];

export default function ServiceHomeInfoCard() {
    return (
        <HomeInfoCard title="Services">
            <div className="flex justify-between gap-6 overflow-x-auto py-4">
                {services.map((service) => (
                    <ServiceCard service={service} key={service.name} />
                ))}
            </div>
        </HomeInfoCard>
    );
}
