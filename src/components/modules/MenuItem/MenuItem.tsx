import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import {Product} from "@/types/Product";






function MenuItems({title, image ,description , price ,  }: Product) {
    console.log()
    return (
        <div className={"flex flex-col text-center gap-5 p-2 shadow-xl font-[Tanha] relative"}>
            <div className={""}>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={200}
                />
            </div>
            <div>

                <h6 className={"text-amber-950 text-[20px] font-bold"}>{title} </h6>
                <p className={"text-[15px] mb-2"}>
                    {description}
                </p>
                <p>
                    {price}
                </p>
            </div>
            <div className={"relative top-7"}>
                <Button className={"bg-amber-950! text-white"}>سفارش</Button>
            </div>
        </div>
    );
}

export default MenuItems;