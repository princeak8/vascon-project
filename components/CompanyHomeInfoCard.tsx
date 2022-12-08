import ArrowButton from "./ArrowButton";
import CompanyInfo from "./CompanyInfo";

const companies: string[] = ["/chevron.png", "/exxon.png", "/total.png", "/oando.png", "/nnpc.png"];

export default function CompanyInfoCard() {
    return (
        <div className="rounded-lg bg-[#E7FFE5] shadow-[0px_7px_20px_rgba(164,_164,_164,_0.25)]">
            <div className="rounded-lg border-b border-b-white pt-7 pb-4 pl-14">
                <h2 className="text-xl font-semibold leading-6 text-[#21252B]">Oil and Gas Companies in Nigeria</h2>
            </div>
            <div className="flex justify-evenly gap-5 px-5 py-8">
                <ArrowButton className="shrink-0" />

                <div className="flex justify-between gap-4 overflow-x-auto py-4">
                    {companies.map((imgSrc, idx) => (
                        <CompanyInfo imgSrc={imgSrc} key={idx} />
                    ))}
                </div>

                <ArrowButton direction="right" className="shrink-0" />
            </div>
        </div>
    );
}
