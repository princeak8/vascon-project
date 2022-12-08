export default function HomeNewsletterSection() {
    return (
        <div className="flex items-center justify-center gap-6 bg-primary-green py-8 px-56">
            <h2 className="text-xl font-bold text-white">NEWSLETTER</h2>

            <div className="flex basis-4/6 flex-col gap-2 pt-[1.8rem]">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className=" rounded bg-[#E7FFE5] py-4 pl-6"
                />
                <small className="pl-2 text-sm font-normal leading-5 text-white">
                    Never miss an important Oil &amp; Gas News Story
                </small>
            </div>

            <button className="rounded-md border border-primary-green bg-[#FDD922] py-4 px-8 text-sm font-medium text-black">
                Subscribe
            </button>
        </div>
    );
}
