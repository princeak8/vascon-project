import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import type { ServiceItem } from "../types";

interface Props {
    service: ServiceItem;
}

export default function ServiceCard({ service: { imageSrc, name, description, company } }: Props) {
    return (
        <div className="flex h-[466px] w-[300px] shrink-0 grow-0 basis-[300px] flex-col justify-between gap-3">
            <div className="flex h-[262px] w-full items-center justify-center rounded-lg bg-[#f7f7f7]">
                <Image
                    alt=""
                    src={imageSrc}
                    width="282"
                    height="262"
                    className="h-full w-full rounded-lg object-cover align-middle"
                />
            </div>
            <div className="flex h-[192px] flex-col items-center gap-3 rounded-lg border-[1.2px] border-primary-green px-5 py-4 text-center text-[#4a4a4a]">
                <h3 className="text-lg font-bold leading-6">{name}</h3>
                <small className="text-[0.5rem] leading-3">{description}</small>
                <small className="text-base font-normal leading-5">{company}</small>
                <PrimaryButton className="px-20 py-4">View Details</PrimaryButton>
            </div>
        </div>
    );
}
