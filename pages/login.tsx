import TopBar from "../components/TopBar";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div>
            <TopBar />
            <div className="mb-4 h-32 w-full bg-primary-green px-6 py-8 text-3xl">
                <span className="text-white">Login To Your </span>
                <span className="font-bold text-green2"> NOGIC JQS E-Market Place</span>
            </div>

            <div className="mb-4 flex flex-row text-xs">
                <p className="text-primary-green">
                    <Link href="/">Home</Link> &gt; Accounts &gt;{" "}
                </p>
                <p className="text-slate-500">Login To Your Nogic JQS Account</p>
            </div>

            <div className="grid h-[612px] justify-items-stretch bg-[url('/login-bg.png')]">
                <div className="z-20 grid h-[612px] w-3/6 justify-items-stretch justify-self-end rounded-l-3xl bg-white">
                    <div className="w-72 justify-self-center pt-12">
                        <div className="flex w-full flex-row justify-center">
                            <div className="mb-8 flex flex-row justify-self-center">
                                <Image src="/NCDMB LOGO.png" width={65} height={65} alt="" />
                                <div className="ml-2 mt-1">
                                    <p className="font-['Mulish'] text-xl font-bold text-black">E-MARKET</p>
                                    <p className="font-['Mulish'] leading-3 tracking-widest text-gray">
                                        P &nbsp;L &nbsp;A &nbsp;C &nbsp;E
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 h-10 w-full">
                            <p className="font-['Mulish'] text-sm text-form-placeholder">Email Address</p>
                            <div className="relative h-full">
                                <Image
                                    src="/icons/person.png"
                                    width={16}
                                    height={16}
                                    alt=""
                                    className="absolute right-3 top-3"
                                />
                                <input
                                    type="text"
                                    placeholder="e.g example@gmail.com"
                                    className="h-full w-full border-b border-solid bg-form-bg pl-4 text-xs text-form-placeholder"
                                />
                            </div>
                        </div>

                        <div className="mt-12 h-10 w-full">
                            <p className="font-['Mulish'] text-sm text-form-placeholder">Password</p>
                            <div className="relative h-full">
                                <Image
                                    src="/icons/password.png"
                                    width={16}
                                    height={16}
                                    alt=""
                                    className="absolute right-3 top-3"
                                />
                                <input
                                    type="password"
                                    placeholder="*******************************"
                                    className="h-full w-full border-b border-solid bg-form-bg pl-4 text-xs text-form-placeholder"
                                />
                            </div>
                        </div>

                        <div className="mt-10 h-10 w-full rounded bg-primary-green pt-2">
                            <p className="text-center font-['Mulish'] text-white">LOGIN</p>
                        </div>
                    </div>
                </div>
                {/* <div className="z-0 absolute">
                <Image src="/login-bg.png" width={1440} height={612} alt="" />
            </div> */}
            </div>
        </div>
    );
}

type LayoutProps = {
    children: React.ReactNode;
};

Login.getLayout = function PageLayout(page: LayoutProps) {
    return <>{page}</>;
};
