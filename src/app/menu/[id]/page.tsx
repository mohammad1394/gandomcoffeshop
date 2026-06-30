
import CTASection from "@/components/templates/home/CTASection";
import { Product } from "@/types/Product";
import ProductContent from "@/components/modules/MenuDetails/ProductContent";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;

    const res = await fetch(`http://localhost:8000/menuData/${id}`, {
        cache: "no-store",
    });

    const product: Product = await res.json();

    const allProductsRes = await fetch("http://localhost:8000/menuData", {
        cache: "no-store",
    });

    const allProducts: Product[] = await allProductsRes.json();

    const relatedProducts = allProducts
        .filter((item) => item.id !== product.id)
        .slice(0, 3);

    return (
        <main className="bg-[#FFF9F4]">


            <div className="w-[85%] mx-auto py-20">

                <ProductContent
                    product={product}
                    relatedProducts={relatedProducts}
                />

            </div>

            <CTASection />

        </main>
    );
}