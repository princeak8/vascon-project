import Image from "next/image";

interface Props {
    category: { name: string; imgSrc: string };
}

export default function CategoryInfo({ category: { imgSrc, name } }: Props) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex h-[122px] w-[122px] justify-center rounded-3xl bg-[#E7FFE5]">
                <Image alt="" src={imgSrc} width="80" height="80" className="object-contain" />
            </div>
            <p className="text-xs font-normal">{name}</p>
        </div>
    );
}
