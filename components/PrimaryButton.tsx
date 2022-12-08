import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className: string;
}

export default function PrimaryButton({ children, className }: Props) {
    return (
        <button
            className={` border-green rounded-md border bg-primary-green text-sm font-medium text-white ${className}`}
        >
            {children}
        </button>
    );
}
