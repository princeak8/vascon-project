import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="h-48 w-full bg-white shadow">
            <div className="h-1/2 w-full px-[5%] pt-4 shadow">
                <div className="mb-8 flex flex-row justify-self-center">
                    <Image src="/NCDMB LOGO.png" width={65} height={65} alt="" />
                    <div className="ml-2 mt-1 mr-6">
                        <p className="font-['Mulish'] text-xl font-bold text-black">E-MARKET</p>
                        <p className="font-['Mulish'] leading-3 tracking-widest text-gray">
                            P &nbsp;L &nbsp;A &nbsp;C &nbsp;E
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mt-3 mr-5 flex h-12 w-[80%] flex-row">
                        <div className="relative h-full w-[10%] min-w-[90px] rounded-l-lg bg-green pt-3 pl-5 font-['Mulish'] text-base font-thin text-white">
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
                            <input type="text" className="h-full w-full rounded-r-lg border border-green" />
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
                    <div className="mt-3 flex h-12 w-[6%] min-w-[90px] flex-row rounded-lg bg-green pt-3 pr-4">
                        <Image src="/icons/user2.png" width={30} height={20.42} alt="" className="ml-2 mb-1" />
                        <p className=" ml-2 font-['Mulish'] text-base text-white">Login</p>
                    </div>
                </div>
            </div>

            <div className="flex h-1/2 w-full flex-row justify-between px-[5%] pt-8">
                <div className="flex flex-row font-['Mulish']">
                    <p className="mr-12">HOME</p>
                    <p className="mr-12">CATEGORIES</p>
                    <p className="mr-12">ADVERTS</p>
                    <p className="mr-12">PRODUCT AND SERVICES</p>
                    <p className="mr-12">COMPANIES</p>
                </div>
                <div className="flex flex-row">
                    <div className="mr-2 flex h-2/3 w-28 flex-row justify-between rounded-lg border-2 border-solid border-gray3 px-1 pt-1">
                        <p className="text-gray3">English</p>
                        <img src="/icons/arrow-down.png" width={"15px"} height={"10px"} className="mt-2 mr-1 h-[30%]" />
                    </div>
                    <div className="flex h-2/3 w-28 flex-row justify-between rounded-lg border-2 border-solid border-gray3 px-1 pt-1">
                        <p className="text-gray3">NGN</p>
                        <img src="/icons/arrow-down.png" width={"15px"} height={"10px"} className="mt-2 mr-1 h-[30%]" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
