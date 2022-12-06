import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="w-full bg-white h-48 shadow">
            <div className="w-full h-1/2 shadow px-[5%] pt-4">
                <div className="flex flex-row mb-8 justify-self-center">
                    <Image src="/NCDMB LOGO.png" width={65} height={65} alt="" /> 
                    <div className="ml-2 mt-1 mr-6">
                        <p className="text-black font-['Mulish'] font-bold text-xl">E-MARKET</p>
                        <p className="text-gray leading-3 font-['Mulish'] tracking-widest">P &nbsp;L &nbsp;A &nbsp;C &nbsp;E</p>
                    </div>

                    {/* Search */}
                    <div className="flex flex-row h-12 w-[80%] mt-3 mr-5">
                        <div className="bg-green text-white text-base font-thin rounded-l-lg w-[10%] min-w-[90px] h-full font-['Mulish'] pt-3 pl-5 relative">
                            Search
                            <Image src="/icons/search.png" width={20} height={20} alt="" className="absolute right-[10%] top-4" /> 
                        </div>
                        <div className="h-full w-[90%] relative">
                            <input type="text" className="h-full w-full border border-green rounded-r-lg" />
                            <Image src="/icons/camera.png" width={30} height={30} alt="" className="absolute right-5 top-3" /> 
                        </div>
                    </div>
                    {/* Login button */}
                    <div className="flex flex-row w-[6%] h-12 mt-3 bg-green rounded-lg pt-3 pr-4">
                        <Image src="/icons/user2.png" width={30} height={20.42} alt="" className="ml-2 mb-1" />
                        <p className=" text-white font-['Mulish'] text-base ml-2">Login</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-1/2 px-[5%] pt-8 flex flex-row justify-between">
                <div className="flex flex-row font-['Mulish']">
                    <p className="mr-12">HOME</p>
                    <p className="mr-12">CATEGORIES</p>
                    <p className="mr-12">ADVERTS</p>
                    <p className="mr-12">PRODUCT AND SERVICES</p>
                    <p className="mr-12">COMPANIES</p>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row justify-between rounded-lg border-2 border-solid border-gray3 w-28 h-2/3 pt-1 px-1 mr-2">
                        <p className="text-gray3">English</p>
                        <img src="/icons/arrow-down.png" width={"15px"} height={"10px"} className="h-[30%] mt-2 mr-1" />
                    </div>
                    <div className="flex flex-row justify-between rounded-lg border-2 border-solid border-gray3 w-28 h-2/3 pt-1 px-1">
                        <p className="text-gray3">NGN</p>
                        <img src="/icons/arrow-down.png" width={"15px"} height={"10px"} className="h-[30%] mt-2 mr-1" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;