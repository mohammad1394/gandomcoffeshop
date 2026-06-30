"use client";

import Image from "next/image";
import { Heart, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import {Product} from "@/types/Product";
import Link from "next/link";


export default function MenuCard({
                                     id,
                                     title,
                                     description,
                                     image,
                                     price,
                                     tags,
                                 }: Product) {
    const [wished, setWished] = useState(false);

    return (
        <article className="group bg-white rounded-2xl overflow-hidden border border-[#ead9bf] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(74,46,26,0.15)]">

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <button
                    onClick={() => setWished(!wished)}
                    className={`
            absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center
            justify-content-center border-none shadow-sm transition-colors duration-200
            ${wished ? "text-red-500" : "text-[#c0a080] hover:text-red-400"}
          `}
                    aria-label="علاقه‌مندی"
                >
                    <Heart
                        size={15}
                        fill={wished ? "currentColor" : "none"}
                        className="mx-auto"
                    />
                </button>
            </div>

            {/* Body */}
            <Link href={`/menu/${id}`}>
                <div className="p-3.5 pb-4">

                {/* Title + Price */}
                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="text-[17px] font-bold text-[#2d1a0e]">
                        {title}
                    </h3>
                    <span className="text-sm font-bold text-[#3d2010] whitespace-nowrap shrink-0">
            {price.toLocaleString("fa-IR")}
                        <span className="text-[11px] font-normal text-[#8a6a50] mr-0.5">
              تومان
            </span>
          </span>
                </div>

                {/* Description */}
                <p className="text-[12.5px] text-[#7a6050] leading-7 line-clamp-1 mb-2.5">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] text-[#6B4A36] bg-[#f3ece0] rounded-full px-2.5 py-0.5"
                        >
              {tag}
            </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex gap-2">
                    <button className="flex-1 h-10 rounded-xl bg-[#3a2210] text-white font-bold text-[13px] flex items-center justify-center gap-1 hover:bg-[#2a160a] transition-colors">
                        <Plus size={14} />
                        افزودن به سبد
                    </button>

                </div>

            </div>
            </Link>
        </article>
    );
}