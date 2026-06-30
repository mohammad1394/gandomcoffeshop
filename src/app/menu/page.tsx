import React from 'react';
import SearchBox from "@/components/modules/SearchBox/SearchBox";
import CategoryFilter from "@/components/modules/CategoryFilter/CategoryFilter";
import CTASection from "@/components/templates/home/CTASection";
import {Product} from "@/types/Product";
import MenuCard from "@/components/modules/MenuCard/MenuCard";

type PageProps = {
    searchParams: Promise<{
        q?: string;
        category?: string;
    }>;
};

async function Page({searchParams}: PageProps) {

    const { q, category } = await searchParams;

    const res = await fetch("http://localhost:8000/menuData", {
        cache: "no-store",
    });

    const products: Product[] = await res.json();

    let filteredProducts = products;

    if (q) {
        filteredProducts = filteredProducts.filter((item) =>
            item.title.includes(q)
        );
    }

    if (category) {
        filteredProducts = filteredProducts.filter((item) =>
            item.tags.includes(category)
        );
    }



    return (
        <>


            <div className={"w-[80%] mx-auto py-16"}>

                <div className="grid lg:grid-cols-4 gap-6">

                    <div className="lg:col-span-3">
                        <CategoryFilter/>
                    </div>

                    <div className="lg:col-span-1">
                        <SearchBox/>
                    </div>


                </div>


                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 py-5">
                    {filteredProducts.map((product , index) => (
                        <MenuCard
                            key={index}
                            {...product}
                        />
                    ))}
                </div>


            </div>
            <CTASection/>
        </>
    );
}

export default Page;