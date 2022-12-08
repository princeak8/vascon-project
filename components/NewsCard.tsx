import Image from "next/image";
import { NewsItem } from "../types";

interface Props {
    newsItem: NewsItem;
}

export default function NewsCard({ newsItem: { imgSrc, heading, summary, publicationDate, readTime } }: Props) {
    return (
        <div className="flex w-[400px] flex-col gap-1 bg-[#21252B] text-white shadow-[-1px_19px_50px_-14px_rgba(228,_228,_228,_0.2)]">
            <h2 className="px-4 py-1 text-xs font-normal leading-4 text-primary-green">News</h2>
            <Image
                alt=""
                src={imgSrc}
                width="213"
                height="77"
                className="block h-auto w-full object-contain px-4 py-1"
            />
            <h3 className="px-4 py-1 text-sm font-black leading-4">{heading}</h3>
            <p className="px-4 py-1 text-[0.625rem] font-normal leading-3">{summary}</p>
            <hr className="h-[1px] bg-white" />
            <div className="flex justify-between px-4 py-2 text-[0.5rem] font-normal text-primary-green">
                <span className="">{publicationDate}</span>
                <span className="">{readTime}</span>
            </div>
        </div>
    );
}
