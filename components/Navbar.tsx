import Link from "next/link";
import Image from "next/image";
import DownArrowImage from "./DownArrowImage";

const Navbar = () => {
    return (
        <nav className="h-48 w-full bg-white shadow">
            <div className="h-1/2 w-full px-[5%] pt-4 shadow">
                <div className="mb-8 flex flex-row justify-self-center">
                    <Link href="/" className="flex justify-between gap-2">
                        <Image src="/NCDMB LOGO.png" width={65} height={65} alt="" />
                        <div className="mt-1 mr-6">
                            <p className="font-['Mulish'] text-xl font-bold text-black">E-MARKET</p>
                            <p className="font-['Mulish'] leading-3 tracking-widest text-gray">
                                P &nbsp;L &nbsp;A &nbsp;C &nbsp;E
                            </p>
                        </div>
                    </Link>

                    {/* Search */}
                    <div className="mt-3 mr-5 flex h-12 w-[80%] flex-row">
                        <div className="bg-primary-green relative h-full w-[10%] min-w-[90px] rounded-l-lg pt-3 pl-5 font-['Mulish'] text-base font-thin text-white">
                            Search
                            <Image
                                src="/icons/search.png"
                                width={20}
                                height={20}
                                alt=""
                                className="absolute right-[10%] top-4"
                            />
                        </div>
                        <div className="relative h-full w-[90%]">
                            <input type="text" className="border-primary-green h-full w-full rounded-r-lg border" />
                            <Image
                                src="/icons/camera.png"
                                width={30}
                                height={30}
                                alt=""
                                className="absolute right-5 top-3"
                            />
                        </div>
                    </div>
                    {/* Login button */}
                    <Link
                        href="/login"
                        className="bg-primary-green mt-3 flex h-12 w-[6%] min-w-[90px] flex-row rounded-lg pt-3 pr-4"
                    >
                        <Image src="/icons/user2.png" width={30} height={20.42} alt="" className="ml-2 mb-1" />
                        <p className=" ml-2 font-['Mulish'] text-base text-white">Login</p>
                    </Link>
                </div>
            </div>

            <div className="relative flex h-1/2 w-full flex-row justify-between px-[5%] pt-8">
                <div className="flex flex-row font-['Mulish']">
                    <p className="mr-12">HOME</p>
                    <p className="mr-12 flex flex-row" id="category-button" aria-expanded="true" aria-haspopup="true">
                        CATEGORIES
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </p>
                    <p className="mr-12">ADVERTS</p>
                    <Link href="/products" className="mr-12">
                        PRODUCT AND SERVICES
                    </Link>
                    <p className="mr-12">COMPANIES</p>
                </div>
                <div className="flex flex-row">
                    <div className="mr-2 flex h-2/3 w-28 flex-row justify-between rounded-lg border-2 border-solid border-gray3 px-1 pt-1">
                        <p className="text-gray3">English</p>
                        <DownArrowImage className="mt-2 mr-1 h-[30%]" />
                    </div>
                    <div className="flex h-2/3 w-28 flex-row justify-between rounded-lg border-2 border-solid border-gray3 px-1 pt-1">
                        <p className="text-gray3">NGN</p>
                        <DownArrowImage className="mt-2 mr-1 h-[30%]" />
                    </div>
                </div>

                {/* Drop down here */}
            </div>
        </nav>
    );
};

export default Navbar;
