import HomeInfoCard from "./HomeInfoCard";
import type { Product } from "../types";
import { ProductStatus } from "../enums";
import ProductCard from "./ProductCard";

const products: Product[] = [
    {
        imageRef: "/coil-tubing.png",
        status: ProductStatus.New,
        name: "Coile Tubing Units",
        price: "₦130,000,000",
        company: "NLNG",
    },
    {
        imageRef: "/control-valve.png",
        status: ProductStatus.New,
        name: "Control Valve",
        price: "Undisclosed",
        company: "Petraco Oil Ltd",
    },
    {
        imageRef: "/hydraulic.png",
        status: ProductStatus.Used,
        name: "Hydraulic Production Packer",
        price: "Undisclosed",
        company: "NLNG",
    },
    {
        imageRef: "/flex-grip.png",
        status: ProductStatus.Refurbished,
        name: "Mechanical Flex Grip",
        price: "₦433,400,000",
        company: "NPDC",
    },
];

export default function ProductHomeInfoCard() {
    return (
        <HomeInfoCard title="Products">
            <div className="flex justify-between gap-6 overflow-x-auto py-4">
                {products.map((product) => (
                    <ProductCard product={product} key={product.name} />
                ))}
            </div>
        </HomeInfoCard>
    );
}
