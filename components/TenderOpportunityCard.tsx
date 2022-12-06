import Image from "next/image";
import type { TenderOpportunity } from "../types";

interface Props {
    opportunity: TenderOpportunity;
}

export default function TenderOpportunityCard({
    opportunity: { refNumber, logoImageRef, heading, description },
}: Props) {
    return (
        <div className="flex items-center justify-between rounded-[4px] border-[1.2px] border-[#e3e3e3] pb-10 pl-3 pt-10 pr-10 shadow-[5px_10px_14px_rgba(0,_0,_0,_0.03)]">
            <div className="flex w-9/12 items-center gap-3 pr-16">
                <Image className="w-fit" alt="" src={logoImageRef} width={154} height={110} />
                <div className="grow-0">
                    <h3 className="text-xl font-bold leading-7">{heading}</h3>
                    <div className="text-sm font-light text-[#9D9D9D]">
                        <p>
                            <span className="text-green">Tender Opportunity:</span> <span>{description}</span>
                        </p>
                        <p>Tender Ref No: {refNumber}</p>
                    </div>
                </div>
            </div>
            <button className="w-[192px] rounded-md border border-green bg-green px-2 py-4 text-sm font-medium text-white">
                View Details
            </button>
        </div>
    );
}
