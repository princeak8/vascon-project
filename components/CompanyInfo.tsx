import Image from "next/image";

interface Props {
    imgSrc: string;
}

export default function CategoryInfo({ imgSrc }: Props) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex h-[90px] w-[205px] justify-center rounded-3xl bg-white">
                <Image alt="" src={imgSrc} width="62" height="62" className="object-contain" />
            </div>
        </div>
    );
}
