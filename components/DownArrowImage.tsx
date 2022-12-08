import Image from "next/image";

interface Props {
    className: string;
}

export default function DownArrowImage({ className }: Props) {
    return <Image alt="" src="/icons/arrow-down.png" width="15" height="10" className={className} />;
}
