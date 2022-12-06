import ArrowButton from "./ArrowButton";

export interface Props {
    title: string;
}

export default function HomeInfoCardHeading({ title }: Props) {
    return (
        <div className="mb-5">
            <hr className="h-[7px] border-none bg-green" />
            <div className="border-t-none flex justify-between border-2 border-[#f5f5f5] px-5 pt-6 pb-7">
                <h2 className="text-xl font-medium leading-6 text-green">{title}</h2>
                <div className="flex gap-4">
                    <ArrowButton />
                    <ArrowButton direction="right" />
                </div>
            </div>
        </div>
    );
}
