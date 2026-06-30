import React from 'react';
import MenuItem from "@/components/modules/MenuItem/MenuItem";
import Container from "@/components/layout/Container/Container";
import {Product} from "@/types/Product";



async function Menu() {

    const res = await fetch("http://localhost:8000/menuData")
    const data:Product[] = await res.json();


    return (
            <Container className={"mt-40 lg:mt-20 relative"}>
                <div className={"w-1/2 mx-auto text-center font-[Tanha]"}>
                    <p className={"text-amber-950 text-[15px] lg:text-[25px] font-bold "}>
                        از یک ترکیب نوین وو دل انگیز از قهوه لذت ببرید.
                    </p>
                    <p className={"text-gray-500 text-[16px] "}>
                        همه طعم های قهوه را با ما کشف کنید همیشه فنجانی جدید برای تجربه کردن وجود دارد
                    </p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto my-10"}>
                    {
                        data.map((item : Product  ) => (
                            <MenuItem key={item.id} {...item}/>
                        ))
                    }
                </div>
            </Container>
    );
}

export default Menu;