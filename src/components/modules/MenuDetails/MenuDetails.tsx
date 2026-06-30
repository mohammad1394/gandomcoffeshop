"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types/Product";

type Props = {
    product: Product;
};

export default function ProductInfo({ product }: Props) {
    return (
        <section className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="relative overflow-hidden rounded-3xl shadow-xl">

                <Image
                    src={product.image}
                    alt={product.title}
                    width={700}
                    height={700}
                    className="duration-500 hover:scale-110"
                />

            </div>

            <div>

                <div className="flex gap-1 mb-5">

                    {[...Array(5)].map((_, index) => (

                        <Star
                            key={index}
                            size={20}
                            className="fill-[#E7C66B] text-[#E7C66B]"
                        />

                    ))}

                    <span className="mr-3 text-gray-500">

            (4.9)

          </span>

                </div>

                <h2 className="text-5xl font-bold text-[#4B2E1E]">

                    {product.title}

                </h2>

                <p className="mt-8 leading-9 text-gray-600">

                    {product.description}

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    {product.tags.map((tag) => (

                        <span
                            key={tag}
                            className="px-5 py-2 rounded-full bg-[#F6E4BF] text-[#4B2E1E]"
                        >
              {tag}
            </span>

                    ))}

                </div>

                <h3 className="text-4xl font-bold text-[#4B2E1E] mt-10">

                    {product.price.toLocaleString()} تومان

                </h3>

                <div className="mt-10 flex items-center gap-6">

                    {/*<QuantitySelector />*/}

                    <button
                        className="
            h-14
            px-10
            rounded-xl
            bg-[#4B2E1E]
            text-white
            hover:bg-[#E7C66B]
            hover:text-[#4B2E1E]
            duration-300
            "
                    >
                        افزودن به سبد خرید
                    </button>

                </div>

            </div>
            {/* ================= Features ================= */}

            <div className="mt-24">

                <h2 className="text-3xl font-bold text-[#4B2E1E] mb-10">

                    ویژگی‌های محصول

                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="rounded-3xl bg-white p-8 border border-[#E7D9C7]">
                        <h3 className="font-bold text-[#4B2E1E]">
                            نوع نوشیدنی
                        </h3>

                        <p className="mt-3 text-gray-500">
                            قهوه گرم
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 border border-[#E7D9C7]">
                        <h3 className="font-bold text-[#4B2E1E]">
                            حجم
                        </h3>

                        <p className="mt-3 text-gray-500">
                            ۳۵۰ میلی‌لیتر
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 border border-[#E7D9C7]">
                        <h3 className="font-bold text-[#4B2E1E]">
                            زمان آماده سازی
                        </h3>

                        <p className="mt-3 text-gray-500">
                            ۵ دقیقه
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 border border-[#E7D9C7]">
                        <h3 className="font-bold text-[#4B2E1E]">
                            کافئین
                        </h3>

                        <p className="mt-3 text-gray-500">
                            متوسط
                        </p>
                    </div>

                </div>

            </div>

            {/* ================= Description ================= */}

            <div className="mt-24">

                <div className="flex gap-5 border-b pb-5">

                    <button
                        className="
            px-8
            py-3
            rounded-xl
            bg-[#4B2E1E]
            text-white
            "
                    >

                        توضیحات

                    </button>

                    <button
                        className="
            px-8
            py-3
            rounded-xl
            bg-[#F5F1EB]
            text-[#4B2E1E]
            "
                    >

                        مواد اولیه

                    </button>

                    <button
                        className="
            px-8
            py-3
            rounded-xl
            bg-[#F5F1EB]
            text-[#4B2E1E]
            "
                    >

                        ارزش غذایی

                    </button>

                </div>

                <div
                    className="
        mt-10
        bg-white
        rounded-3xl
        border
        border-[#E7D9C7]
        p-10
    "
                >

                    <h3
                        className="
            text-2xl
            font-bold
            text-[#4B2E1E]
        "
                    >

                        درباره این نوشیدنی

                    </h3>

                    <p
                        className="
            mt-8
            leading-10
            text-gray-600
        "
                    >

                        {product.description}

                        <br />
                        <br />

                        این نوشیدنی با استفاده از دانه‌های قهوه تازه رُست شده،
                        شیر تازه و مواد اولیه باکیفیت تهیه می‌شود تا تجربه‌ای
                        متفاوت از نوشیدن قهوه را برای شما فراهم کند.

                        <br />
                        <br />

                        تمام سفارش‌ها بلافاصله پس از ثبت سفارش آماده شده و
                        با بهترین کیفیت سرو می‌شوند.

                    </p>

                </div>

            </div>
        </section>
    );
}