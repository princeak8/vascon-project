import Image from "next/image";

const TopBar = () => {
    return (
        <div className="h-10 w-full bg-black px-[5%] py-2 text-white">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row font-['Mulish'] text-sm">
                    <Image src="/icons/phone.svg" width={12} height={12} alt="" />
                    <div className="ml-2 mr-2">call Us: 016310962</div>
                    <Image src="/icons/mail.png" width={18} height={10} alt="" />
                    <div className="ml-2">Email: support@nogicjqs.com</div>
                </div>

                <div className="flex flex-row font-['Mulish'] text-sm">
                    <span className="mr-2">Follow Us:</span>
                    <Image src="/icons/facebook.png" width={16} height={12} alt="" className="mx-1" />
                    <Image src="/icons/twitter.png" width={16} height={12} alt="" className="mx-1" />
                    <Image src="/icons/linkedin.png" width={16} height={12} alt="" className="mx-1" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
