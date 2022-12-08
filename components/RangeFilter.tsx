import Image from "next/image";
import type { Filter, range } from "../types";
import DownArrowImage from "./DownArrowImage";

export default function Filter({ filter }: { filter: Filter }) {
    function renderFilterRange(range: range) {
        return (
            <div className="mb-6">
                <input
                    id="small-range"
                    type="range"
                    min={range.min}
                    max={range.max}
                    value={range.value}
                    className="range-sm dark:bg-gray-700 bg-1 h-1 w-full cursor-pointer appearance-none rounded-lg"
                />
                <div className="flex w-full flex-row justify-between text-sm text-gray2">
                    <span>1</span>
                    <span>100000000</span>
                </div>
            </div>
        );
    }

    function renderFilter() {
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
            {/* radio buttons */}
            <div className="mt-3 pl-[8%] ">
                {renderFilter()}
                {/* <p className="text-xs text-green">Show more</p> */}
            </div>
        </div>
    );
}
