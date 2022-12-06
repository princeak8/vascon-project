import Image from "next/image";

interface Props {
    direction?: "left" | "right";
    className?: string;
}

export default function ArrowButton({ direction = "left", className = "" }: Props) {
    return (
        <button className={className}>
            <Image
                alt=""
                src="/icons/home-info-card-arrow.svg"
                width="38"
                height="38"
                className={`${direction === "right" ? "rotate-180" : ""}`}
            />
        </button>
    );
}
