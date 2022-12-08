import HomeQuotationForm from "./HomeQuotationForm";
import PrimaryButton from "./PrimaryButton";

export default function HomeQuotationSection() {
    return (
        <div className="flex h-[463px] bg-[url('/young-programmer-typing-laptop-office.png')] bg-cover bg-no-repeat">
            <div className="flex basis-1/2 flex-col items-start gap-8 bg-[linear-gradient(92.21deg,_rgba(255,_255,_255,_0.96)_54.51%,_rgba(255,_255,_255,_0)_86.66%)] py-24 px-24">
                <h2 className="text-xl font-semibold leading-6 text-[#21252B]">EASY SOURCING</h2>
                <div className="w-[70%]">
                    <p className="font-base mb-8 text-base leading-5 text-[#989898]">
                        An easy way to post your sourcing requests and get quotes.
                    </p>
                    <p className="font-base text-base leading-5 text-[#989898]">
                        One request, multiple quotes Verified suppliers matching Quotes comparison and sample request
                    </p>
                </div>
                <PrimaryButton className="px-8 py-4">Learn More</PrimaryButton>
            </div>
            <div className="flex basis-1/2 py-6 pr-24">
                <div className="flex w-full flex-col gap-4 rounded-lg bg-white px-7 py-8">
                    <h3 className="text-xl font-semibold leading-6 text-[#21252B]">Want to get quotations?</h3>
                    <HomeQuotationForm />
                </div>
            </div>
        </div>
    );
}
