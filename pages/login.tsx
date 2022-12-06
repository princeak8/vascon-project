import TopBar from '../components/TopBar'
import Image from 'next/image';

export default function Login() {
  return (
    <div>
        <TopBar />
        <div className="w-full h-32 bg-green px-6 py-8 text-3xl mb-4">
                <span className="text-white">Login To Your </span>
                <span className="text-green2 font-bold"> NOGIC JQS E-Market Place</span>
        </div>

        <div className="flex flex-row text-xs mb-4">
            <p className="text-green">Home > Accounts > </p>
            <p className="text-slate-500">Login To Your Nogic JQS Account</p>
        </div>

        <div className="bg-[url('/login-bg.png')] h-[612px] grid justify-items-stretch">
            <div className="z-20 w-3/6 h-[612px] bg-white justify-self-end rounded-l-3xl grid justify-items-stretch">
                
                <div className="justify-self-center pt-12 w-72">
                    <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row mb-8 justify-self-center">
                            <Image src="/NCDMB LOGO.png" width={65} height={65} alt="" /> 
                            <div className="ml-2 mt-1">
                                <p className="text-black font-['Mulish'] font-bold text-xl">E-MARKET</p>
                                <p className="text-gray leading-3 font-['Mulish'] tracking-widest">P &nbsp;L &nbsp;A &nbsp;C &nbsp;E</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-10 mt-4">
                        <p className="text-form-placeholder font-['Mulish'] text-sm">Email Address</p>
                        <div className="relative h-full">
                            <Image src="/icons/person.png" width={16} height={16} alt="" className="absolute right-3 top-3" />
                            <input type="text" placeholder="e.g example@gmail.com" className="border-b border-solid bg-form-bg text-form-placeholder text-xs w-full h-full pl-4" />
                        </div>
                    </div>

                    <div className="w-full h-10 mt-12">
                        <p className="text-form-placeholder font-['Mulish'] text-sm">Password</p>
                        <div className="relative h-full">
                            <Image src="/icons/password.png" width={16} height={16} alt="" className="absolute right-3 top-3" />
                            <input type="password" placeholder="*******************************" className="border-b border-solid bg-form-bg text-form-placeholder text-xs w-full h-full pl-4" />
                        </div>
                    </div>

                    <div className="w-full h-10 mt-10 bg-green rounded pt-2">
                        <p className="text-center text-white font-['Mulish']">LOGIN</p>
                    </div>

                </div> 

            </div>
            {/* <div className="z-0 absolute">
                <Image src="/login-bg.png" width={1440} height={612} alt="" />
            </div> */}
            
        </div>
    </div>
  )
}

type LayoutProps = {
    children: React.ReactNode,
};

Login.getLayout = function PageLayout(page : LayoutProps) {
    return (
        <>
            {page}
        </>
    )
}