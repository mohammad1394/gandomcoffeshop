
interface Props {
    menuisOpen: boolean;
    toggleMenu: () => void;
}



function NavbarSideBar({menuisOpen , toggleMenu} : Props) {
    return (
        <>
            {
                menuisOpen &&  <div className={"w-1/2 bg-gray-800 h-[130vh] text-black fixed  top-0 right-0 text-right p-5 "}>
                    <ul className={"flex flex-col gap-5"}>
                        <li className={"text-right"} onClick={toggleMenu}>
                            {/*<ImCross />*/}
                        </li>
                        <li >
                            خانه
                        </li>
                        <li >
                            منو
                        </li>
                        <li >
                            درباره ما
                        </li>
                        <li >
                            ارتباط با ما
                        </li>
                        <li >
                            ورود
                        </li>
                        <li >
                            ثبت نام
                        </li>

                    </ul>
                </div>
            }
        </>
    );
}

export default NavbarSideBar;