import Image from "next/image";
import type { Filter, range } from "../types";
import DownArrowImage from "./DownArrowImage";

export default function Filter({ filter }: { filter: Filter }) {
    function renderFilterOptions(options: string[]) {
        return options.map((option) => {
            return (
                <div className="mb-2 flex flex-row" key={option}>
                    <input type="radio" className="mr-4 border-primary-green" />
                    <p className="text-xs text-gray2">{option}</p>
                </div>
            );
        });
    }
    function renderFilterRange(range: range) {
        return (
            <input
                id="small-range"
                type="range"
                min="1"
                max="100000000"
                value="100000000"
                className="range-sm dark:bg-gray-700 mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-primary-green"
            />
        );
    }

    function renderFilter() {
        if (filter.type == "radio" && filter.values != undefined) {
            return renderFilterOptions(filter.values);
        }
        if (filter.type == "range" && filter.range != undefined) {
            return renderFilterRange(filter.range);
        }
    }
    return (
        <div className="mt-4 w-full">
            <div className="flex h-10 flex-row items-center justify-between border-t border-b border-gray2 pl-[8%] pr-2">
                <p className="text-base font-bold">{filter.name}</p>
                <DownArrowImage className="h-[20%]" />
            </div>
            <div className="mx-[5%] mt-1 flex h-8 w-[93%] flex-row items-center rounded-md border border-primary-green pl-[8%] text-gray2">
                <Image alt="" src="/icons/search2.png" width="15" height="10" className="mr-2" />
                <p className="text-xs">Search</p>
            </div>
            {/* radio buttons */}
            <div className="mt-3 pl-[8%] ">
                {renderFilter()}
                <p className="text-xs text-primary-green">Show more</p>
            </div>
        </div>
    );
}
