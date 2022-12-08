import Image from "next/image";
import { ProductStatus } from "../enums";
import { Product } from "../types";
import PrimaryButton from "./PrimaryButton";

interface Props {
    product: Product;
}

export default function ProductCard({ product: { imageRef, status, name, price, company } }: Props) {
    let statusClass = "bg-primary-green";
    if (status === ProductStatus.Used) {
        statusClass = "bg-[#f00]";
    } else if (status === ProductStatus.Refurbished) {
        statusClass = "bg-black";
    }

    return (
        <div className="flex w-[300px] shrink-0 grow-0 basis-[300px] flex-col gap-3">
            <div className="relative flex h-[300px] w-full items-center justify-center rounded-lg bg-[#f7f7f7]">
                <Image
                    alt=""
                    src={imageRef}
                    width="282"
                    height="262"
                    className="h-auto w-[85%] object-cover align-middle"
                />
                <div
                    className={`absolute right-[3%] top-[3%] px-4 py-1 text-sm font-normal leading-4 text-white ${statusClass}`}
                >
                    {status}
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border-[1.2px] border-primary-green px-5 py-4 text-center">
                <h3 className="text-lg font-bold leading-6 text-[#4a4a4a]">{name}</h3>
                <p className="text-lg font-medium leading-6 text-primary-green">{price}</p>
                <small className="text-base font-normal leading-5 text-[#4a4a4a]">{company}</small>
                <PrimaryButton className="px-20 py-4">View Details</PrimaryButton>
            </div>
        </div>
    );
}
