import TenderHomeInfoCard from "../components/TenderHomeInfoCard";
import ProductHomeInfoCard from "../components/ProductHomeInfoCard";
import CategoryInfoCard from "../components/CategoryInfoCard";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-5 bg-[#f1f1f1] py-5 px-28">
                <CategoryInfoCard />
                <TenderHomeInfoCard />
                <ProductHomeInfoCard />
            </div>
            <div className="flex h-[463px] bg-[url('/young-programmer-typing-laptop-office.png')] bg-cover bg-no-repeat">
                <div className="flex basis-1/2 flex-col items-start gap-8 bg-[linear-gradient(92.21deg,_rgba(255,_255,_255,_0.96)_54.51%,_rgba(255,_255,_255,_0)_86.66%)] py-24 px-24">
                    <h2 className="text-xl font-semibold leading-6 text-[#21252B]">EASY SOURCING</h2>
                    <div className="w-[70%]">
                        <p className="font-base mb-8 text-base leading-5 text-[#989898]">
                            An easy way to post your sourcing requests and get quotes.
                        </p>
                        <p className="font-base text-base leading-5 text-[#989898]">
                            One request, multiple quotes Verified suppliers matching Quotes comparison and sample
                            request
                        </p>
                    </div>
                    <button className="rounded-md border border-green bg-green px-8 py-4 text-white">Learn More</button>
                </div>
                <div className="flex basis-1/2 py-9 pr-24">
                    <div className="w-full rounded-lg bg-white px-7 py-8">
                        <h3 className="text-xl font-semibold leading-6 text-[#21252B]">Want to get quotations?</h3>
                        <form>
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="block w-full rounded-lg border border-[#e3e3e3] py-4 pl-5 text-sm"
                            />
                            <textarea
                                placeholder="Product Description"
                                className="w-full rounded-lg border border-[#e3e3e3] py-4 pl-5 text-sm"
                            ></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
