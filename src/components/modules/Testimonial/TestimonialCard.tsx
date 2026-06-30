import React from 'react';
import i from "../../../public/assets/profile-1.jpg"
import Image from "next/image";
export interface Comment {
    id: string
    usename: string
    img: string
    productID: number
    score: number
    body: string
}


function TestimonialCard({ img ,body ,usename} : Comment) {
    return (
        <div className={"flex flex-col gap-5 border border-amber-500 p-10 bg-white w-full bg-black z-10"}>
            <p className={"text-gray-600 text-[16px]  "}>
                {body}
            </p>
            <Image
                src={img}
                alt={usename}
                width={80}
                height={130}
                className={"object-cover rounded-full mx-auto my-5 border-amber-500 border-2"}
            />
            <p className={"text-amber-950 "}>{usename}  </p>
        </div>
    );
}

export default TestimonialCard;