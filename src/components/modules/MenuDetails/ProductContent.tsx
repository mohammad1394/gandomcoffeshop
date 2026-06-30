"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Product } from "@/types/Product";
import MenuCard from "@/components/modules/MenuCard/MenuCard";

type Props = {
    product: Product;
    relatedProducts: Product[];
};

export default function ProductContent({
                                           product,
                                           relatedProducts,
                                       }: Props) {

    const [count, setCount] = useState(1);

    return (
        <section className="w-[85%] mx-auto py-20">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Image */}

                <div>

                    <div
                        className="
                        overflow-hidden
                        rounded-[30px]
                        bg-white
                        shadow-xl
                        border
                        border-[#E8D5C4]
                    "
                    >

                        <Image
                            src={product.image}
                            alt={product.title}
                            width={700}
                            height={700}
                            className="
                            w-full
                            h-[520px]
                            object-cover
                            duration-500
                            hover:scale-110
                        "
                        />

                    </div>

                </div>

                {/* Content */}

                <div>

                    <div className="flex items-center gap-2">

                        {[...Array(5)].map((_, index) => (

                            <Star
                                key={index}
                                size={20}
                                className="fill-[#E7C66B] text-[#E7C66B]"
                            />

                        ))}

                        <span className="text-sm text-gray-500">

                            (4.9)

                        </span>

                    </div>

                    <h1
                        className="
                        mt-5
                        text-5xl
                        font-bold
                        text-[#4B2E1E]
                    "
                    >

                        {product.title}

                    </h1>

                    <p
                        className="
                        mt-8
                        leading-9
                        text-gray-600
                    "
                    >

                        {product.description}

                    </p>

                    {/* Tags */}

                    <div className="flex flex-wrap gap-3 mt-8">

                        {/*{product.tags.map((tag) => (*/}

                        {/*    <span*/}
                        {/*        key={tag}*/}
                        {/*        className="*/}
                        {/*        px-5*/}
                        {/*        py-2*/}
                        {/*        rounded-full*/}
                        {/*        bg-[#F6E6C5]*/}
                        {/*        text-[#4B2E1E]*/}
                        {/*        text-sm*/}
                        {/*    "*/}
                        {/*    >*/}
                        {/*        {tag}*/}
                        {/*    </span>*/}

                        {/*))}*/}

                    </div>

                    {/* Price */}

                    <div className="mt-10">

                        <span className="text-gray-500">

                            قیمت

                        </span>

                        <h2
                            className="
                            mt-2
                            text-4xl
                            font-bold
                            text-[#4B2E1E]
                        "
                        >

                            {/*{product.price.toLocaleString()} تومان*/}

                        </h2>

                    </div>

                    {/* Quantity */}

                    <div className="mt-10 flex items-center gap-5">

                        <div
                            className="
                            flex
                            items-center
                            border
                            rounded-xl
                            overflow-hidden
                        "
                        >

                            <button
                                onClick={() =>
                                    setCount((prev) =>
                                        prev > 1 ? prev - 1 : 1
                                    )
                                }
                                className="
                                w-12
                                h-12
                                flex
                                justify-center
                                items-center
                                hover:bg-gray-100
                            "
                            >

                                <Minus size={18} />

                            </button>

                            <span
                                className="
                                w-14
                                text-center
                                font-bold
                            "
                            >

                                {count}

                            </span>

                            <button
                                onClick={() =>
                                    setCount((prev) => prev + 1)
                                }
                                className="
                                w-12
                                h-12
                                flex
                                justify-center
                                items-center
                                hover:bg-gray-100
                            "
                            >

                                <Plus size={18} />

                            </button>

                        </div>

                        <button
                            className="
                            flex-1
                            h-14
                            rounded-xl
                            bg-[#4B2E1E]
                            text-white
                            flex
                            items-center
                            justify-center
                            gap-3
                            hover:bg-[#D4A762]
                            hover:text-[#4B2E1E]
                            duration-300
                        "
                        >

                            <ShoppingCart size={20} />

                            افزودن به سبد خرید

                        </button>

                        <button
                            className="
                            w-14
                            h-14
                            rounded-xl
                            border
                            flex
                            justify-center
                            items-center
                            hover:bg-red-50
                            duration-300
                        "
                        >

                            <Heart />

                        </button>

                    </div>

                </div>

            </div>

            {/* ادامه در بخش دوم... */}
            {/* ================= Related Products ================= */}

            <div className="mt-24">

                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h2 className="text-3xl font-bold text-[#4B2E1E]">

                            محصولات مشابه

                        </h2>

                        <p className="mt-2 text-gray-500">

                            شاید این نوشیدنی‌ها هم مورد علاقه شما باشند.

                        </p>

                    </div>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {relatedProducts.map((item) => (

                        <MenuCard
                            key={item.id}
                            {...item}
                        />

                    ))}

                </div>

            </div>

            {/* ================= Reviews ================= */}

            <div className="mt-24">

                <h2 className="text-3xl font-bold text-[#4B2E1E] mb-10">

                    نظرات مشتریان

                </h2>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div
                        className="
            bg-white
            rounded-3xl
            border
            border-[#E7D9C7]
            p-8
        "
                    >

                        <div className="flex items-center gap-4">

                            <div
                                className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#D4A762]
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                    text-white
                    "
                            >

                                م

                            </div>

                            <div>

                                <h4
                                    className="
                        font-bold
                        text-[#4B2E1E]
                        "
                                >

                                    محمد رضایی

                                </h4>

                                <span
                                    className="
                        text-sm
                        text-gray-500
                        "
                                >

                        ۲ روز پیش

                    </span>

                            </div>

                        </div>

                        <p
                            className="
                mt-6
                leading-9
                text-gray-600
                "
                        >

                            کیفیت قهوه فوق‌العاده بود و کاملاً تازه سرو شد.
                            بسته‌بندی هم بسیار شیک بود و قطعاً دوباره سفارش
                            خواهم داد.

                        </p>

                    </div>

                    <div
                        className="
            bg-white
            rounded-3xl
            border
            border-[#E7D9C7]
            p-8
        "
                    >

                        <div className="flex items-center gap-4">

                            <div
                                className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#4B2E1E]
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                    text-white
                    "
                            >

                                ا

                            </div>

                            <div>

                                <h4
                                    className="
                        font-bold
                        text-[#4B2E1E]
                        "
                                >

                                    الهام کریمی

                                </h4>

                                <span
                                    className="
                        text-sm
                        text-gray-500
                        "
                                >

                        ۵ روز پیش

                    </span>

                            </div>

                        </div>

                        <p
                            className="
                mt-6
                leading-9
                text-gray-600
                "
                        >

                            طعم متعادل، عطر عالی و سرو سریع.
                            یکی از بهترین تجربه‌های من از سفارش آنلاین قهوه بود.

                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}