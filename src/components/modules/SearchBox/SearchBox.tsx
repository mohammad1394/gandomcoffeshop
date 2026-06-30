"use client";


import { useRouter } from 'next/navigation';
import { Search } from "lucide-react";
import {useSearchParams} from "next/navigation";
import {useEffect, useRef, useState} from "react";

export default function SearchBox() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [value , setValue] = useState(searchParams.get("q") ?? "");
    const debounceRef = useRef<ReturnType <typeof setTimeout> | null >(null)


    useEffect(() => {
        return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    } , [])


    const handleSearch = (raw :string) => {

        setValue(raw);

        if (debounceRef.current) clearTimeout(debounceRef.current)


        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams);

            const keyword = value.trim();

            if (keyword.length > 0) {
                params.set("q", keyword);
            } else {
                params.delete("q");
            }

            router.replace(`/menu?${params}`.toString())
        } , 400)


    }
    return (

        <div
            className="flex items-center bg-white rounded-xl border border-[#E8C76A]/30 h-14 px-5">

            <Search
                size={20}
                className="text-gray-400"
            />

            <input
                value={value}
                placeholder="جستجوی محصول..."
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-transparent outline-none px-3"

            />

        </div>

    );

}