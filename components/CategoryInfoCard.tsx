import ArrowButton from "./ArrowButton";
import CategoryInfo from "./CategoryInfo";
import type { Category } from "../types";

const categories: Category[] = [
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
    { name: "Rigs", imgSrc: "/coil-tubing-2.png" },
];

export default function CategoryInfoCard() {
    return (
        <div className="rounded-lg bg-white shadow-[0px_7px_20px_rgba(164,_164,_164,_0.25)]">
            <div className="rounded-lg border-b border-b-[#f1f1f1] pt-7 pb-4 pl-14">
                <h2 className="text-xl font-semibold leading-6 text-[#21252B]">
                    Browse through major <span className=" text-green">Product Categories</span>
                </h2>
            </div>
            <div className="flex justify-between gap-5 px-5 py-8">
                <ArrowButton className="shrink-0" />

                <div className="flex justify-between gap-4 overflow-x-auto py-4">
                    {categories.map((category, idx) => (
                        <CategoryInfo category={category} key={idx} />
                    ))}
                </div>

                <ArrowButton direction="right" className="shrink-0" />
            </div>
        </div>
    );
}
