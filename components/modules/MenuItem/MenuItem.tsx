import Button from "@/components/modules/Button/Button";


export interface Menu {
    title: string
    recipe: string
    price: number
    url: string
    off: number
    id: string
}



function MenuItems({title  , url , recipe , price }: Menu) {
    return (
        <div className={"flex flex-col text-center gap-5 p-2 shadow-xl font-[Tanha] relative"}>
            <div>
                <img
                    src={url}
                />
            </div>
            <div>

                <h6 className={"text-amber-950 text-[20px] font-bold"}>{title} </h6>
                <p className={"text-[15px] mb-2"}>
                    {recipe}
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