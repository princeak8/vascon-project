import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

interface Props {
    props: { name: string; imageSrc: string; description: string; location: string };
}

export default function MarketingCard({ props: { name, imageSrc, description, location } }: Props) {
    return (
        <div className="flex w-[381px] gap-3 rounded-[4px] border-[1.2px] border-[#e3e3e3] px-3 py-4 shadow-[5px_10px_14px_rgba(0,_0,_0,_0.03)]">
            <Image alt="" src={imageSrc} width="106" height="75" className="self-start" />
            <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-[#252525]">{name}</h3>
                    <small className="text-sm font-normal text-[#9D9D9D]">{location}</small>
                    <h4 className="text-base font-bold text-[#252525]">{description}</h4>
                </div>
                <PrimaryButton className="w-fit px-4 py-3">View Details</PrimaryButton>
            </div>
        </div>
    );
}
