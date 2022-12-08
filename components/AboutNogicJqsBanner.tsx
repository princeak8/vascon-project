import Image from "next/image";

export default function AboutNogicJqsBanner() {
    return (
        <div className="relative my-6 h-[284px] w-full bg-[url('/about-nogic2.png')] bg-[100%] bg-no-repeat">
            <div className="h-full w-full bg-[#17171b] bg-opacity-50 pt-12 font-['Montserrat']">
                <div className="mb-10 flex w-full justify-center">
                    <p className="text-center text-sm font-medium tracking-[10px] text-white">
                        ABOUT NOGIC JQS E-MARKET PLACE
                    </p>
                </div>

                <div className="mt-20 flex w-full flex-row justify-around">
                    <div className="flex items-center">
                        <span className="h-3 w-3 bg-primary-green"></span>
                        <p className="ml-3 text-5xl font-bold text-white">TENDERS</p>
                    </div>
                    <div className="flex items-center">
                        <span className="h-3 w-3 bg-primary-green"></span>
                        <p className="ml-3 text-5xl font-bold text-white">PRODUCTS</p>
                    </div>
                    <div className="flex items-center">
                        <span className="h-3 w-3 bg-primary-green"></span>
                        <p className="ml-3 text-5xl font-bold text-white">SERVICES</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
