"use client";

import {useState} from "react";
import NavbarSideBar from "@/components/layout/Navbar/SidebarNav";
import image from "../../../public/assets/hero.png"
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
function NavbarHeader() {

    const [menuisOpen, setMenuOpen] = useState<boolean>(false);

    function toggleMenu() {
        setMenuOpen(!menuisOpen);
    }


    return (

        <div className={"bg-[url('/assets/hero.png')]  h-[90vh] bg-no-repeat relative bg-cover bg-center text-white font-[Tanha]"}>
            <div className={"w-[90%] mx-auto"}>
                <div className="flex flex-row justify-between py-5">
                    <div className={"hidden md:flex"}>
                        کافه گوشه
                    </div>
                    <div className={"visible md:hidden text-[20px]"} onClick={toggleMenu}>
                        {/*<IoMenu />*/}
                    </div>
                    <NavbarSideBar menuisOpen = {menuisOpen} toggleMenu = {toggleMenu} />
                    <div className={"hidden md:flex"}>
                        <ul className={"flex flex-row"}>
                            <Link href={"/"}>
                            <li className={"ml-10"}>
                                خانه
                            </li>

                            </Link>
                            <Link href={"/menu"}>
                            <li className={"ml-10"}>
                                منو
                            </li>
                            </Link>
                           <Link href={"/aboutus"}>

                            <li className={"ml-10"}>
                                درباره ما
                            </li>
                           </Link>
                            <Link href={"/contactus"}>

                            <li className={"ml-10"}>
                                ارتباط با ما
                            </li>
                            </Link>

                        </ul>
                    </div>
                    <div className={"flex flex-row-reverse gap-2 hidden md:flex"}>
                        <Button className={"ml-5"}>
                            ثبت نام
                        </Button>
                        <button>
                            ورود
                        </button>
                    </div>
                </div>
                <div className={"absolute   top-80 text-center lg:text-right right:60 lg:left-10 ml-5"}>

                    <h2 className={"text-[30px] lg:text-[40px]  text-amber-200 mb-10"}>
                        کافه گوشه
                    </h2>

                    <p className={"text-[16px] lg:text-[20px] mb-10"}>
                        فراتر از یک کافه ، جایی برای استراحت ، آرامش و تجربه های جدید
                        <br/>
                        !به کافه ما خوش آمدید
                    </p>

                    <Button>
                        ثبت سفارش
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default NavbarHeader;