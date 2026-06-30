"use client";

import {
    Coffee,
    CupSoda,
    IceCreamBowl,
    CakeSlice,
    Soup
} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";

const categories = [
    {
        title: "همه",
        value: "",
        icon: Coffee,
    },
    {
        title: "قهوه گرم",
        value: "قهوه گرم",
        icon: Coffee,
    },
    {
        title: "قهوه سرد",
        value: "قهوه سرد",
        icon: CupSoda,
    },
    {
        title: "نوشیدنی",
        value: "نوشیدنی",
        icon: Soup,
    },
    {
        title: "دسر",
        value: "دسر",
        icon: CakeSlice,
    },
    {
        title: "صبحانه",
        value: "صبحانه",
        icon: IceCreamBowl,
    },
];

export default function CategoryFilter() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get("category") ?? "";

    const  handleClick = (category : string)=> {
        if (category === activeCategory) return;

        const params = new URLSearchParams(searchParams);

        if(category === ""){
            params.delete("category")
        }
        else {
            params.set("category", category);
        }

        router.replace(`/menu?${params.toString()}`);
    }
    return (

        <div className="flex flex-wrap gap-4">

            {
                categories.map((item) => {

                const Icon = item.icon;

                const active = activeCategory === item.value
                return (

                    <button

                        key={item.value}
                        onClick={() => handleClick(item.value)}
                        className={`
                flex items-center gap-2
                h-12
                px-6
                rounded-xl
                transition-all
                duration-300
                border

                ${
                            active
                                ? "bg-[#4B2E1E] text-white border-[#4B2E1E]"
                                : "bg-white text-[#4B2E1E] border-[#E8C76A]/40 hover:bg-[#4B2E1E] hover:text-white"
                        }
            `}

                    >

                        <Icon size={18}/>

                        {item.title}

                    </button>

                );

            })}

        </div>

    );

}