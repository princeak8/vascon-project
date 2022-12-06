import type { StaticImageData } from "next/image";
import type { ProductStatus } from "./enums";

export interface TenderOpportunity {
    logoImageRef: string; //StaticImageData;
    heading: string;
    description: string;
    refNumber: string;
}

export interface Product {
    imageRef: string; //StaticImageData;
    status: ProductStatus;
    name: string;
    price: string;
    company: string;
}

export interface Category {
    name: string;
    imgSrc: string;
}

export interface Filter {
    name: string;
    type: string;
    values?: string[];
    range?: range;
}

export interface range {
    min: number;
    max: number;
    value: number;
    step: number;
}

export type filtersInterface = Filter[];