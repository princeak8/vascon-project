import PrimaryButton from "./PrimaryButton";

export default function HomeQuotationForm() {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Product Name"
                    className="block w-full rounded-lg border border-[#e3e3e3] py-4 pl-5 text-sm"
                />
                <textarea
                    placeholder="Product Description"
                    className="w-full resize-none rounded-lg border border-[#e3e3e3] py-4 pl-5 text-sm"
                    rows={4}
                ></textarea>
                <div className="flex w-[80%] justify-start gap-3">
                    <input
                        type="number"
                        placeholder="Purchase Quantity"
                        className="w-full rounded-lg border border-[#e3e3e3] py-4 pl-5 text-sm"
                    />
                    <div className="relative w-full cursor-pointer rounded-lg border border-[#e3e3e3] py-4 pl-5 text-sm text-[#9d9d9d] after:absolute after:right-[10%] after:inline-block after:content-[url('/icons/caret.svg')]">
                        <select defaultValue="" className="h-full w-full cursor-pointer appearance-none">
                            <option value="" disabled>
                                Price(s)
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <PrimaryButton className="self-start px-8 py-4">Request for Quotation</PrimaryButton>
        </form>
    );
}
