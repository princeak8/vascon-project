import Image from "next/image";
import NewsCard from "../components/NewsCard";
import { NewsItem } from "../types";

const newsItems: NewsItem[] = [
    {
        imgSrc: "/news-image-1.png",
        heading: "Edo govt tasks communities on secure of oil, gas installations",
        summary:
            "The Edo State Government has urged local communities to protect oil and gas installations in the state.",
        publicationDate: "Oct 1, 2022",
        readTime: "5 min read",
    },
    {
        imgSrc: "/news-image-2.png",
        heading: "Group condemns asset destruction",
        summary:
            "Following the destruction of national assets in the country, especially in the oil and gas, telecommunications, transportation and power",
        publicationDate: "Sept 30, 2022",
        readTime: "10 min read",
    },
];

export default function HomeBannerCard() {
    return (
        <div className="flex h-[600px] w-full gap-4 rounded-lg bg-white px-4 py-4 shadow">
            <div className="h-full w-[80%] bg-[url('/slider-background.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex h-full w-full flex-row bg-[#114f13] bg-opacity-70">
                    <div className="flex h-full w-[60%] items-center justify-center">
                        <div>
                            <p className="text-5xl font-black text-green2">NOGIC JQS</p>
                            <p className="text-5xl font-black text-white">E-Market Place</p>
                            <p className="text-md font-sm text-white">
                                An electronic e-commerce site
                                <br />
                                for oil and gas industries
                            </p>
                        </div>
                    </div>

                    <div className="relative h-full w-[50%]">
                        <Image src="/banner.gif" layout="fill" alt="" className="object-scale-down" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-3">
                {newsItems.map((item) => (
                    <NewsCard newsItem={item} key={item.heading} />
                ))}
            </div>
        </div>
    );
}
