
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";


function Footer() {
    return (
        <div
             className={" w-[100%] bg-[url('/assets/fotter.png')]   bg-[#442808] lg:w-full h-[60vh] text-white font-[Tanha] flex flex-col lg:flex-row relative" +
                 " bg-cover  "}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b240e]/90 via-[#3b240e]/60 to-[#3b240e]/30"></div>

            <div className={"w-[90%] flex flex-col  lg:flex-row mx-auto z-10 py-20"}>
                <div className={"w-full lg:w-1/4 mx-auto text-right flex flex-col gap-5 "} >
                    <p className={"font-bold text-[30px]  "}>
                        کافه گوشه
                    </p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است</p>
                    <ul className={"flex flex-wrap justify-end gap-2 text-[20px]"}>
                        <li><RiInstagramFill /></li>
                        <li><FaFacebook/></li>
                        <li><FaYoutube /></li>
                        <li><FaTwitter /></li>
                    </ul>
                </div>
                <div className={" w-1/2 flex-col lg:flex-row gap-10 ml-20 text-right hidden lg:flex"}>
                    <div className={"mr-10 w-1/3 "}>
                        <p className={"text-[25px] font-bold  mb-5"}>درباره</p>
                        <ul className={"flex flex-col gap-2"}>
                            <li>
                                منو
                            </li>
                            <li>
                                ویژگی ها
                            </li>
                            <li>
                                اخبار و ولاگ
                            </li>
                            <li>
                                پیشتیبانی
                            </li>
                        </ul>
                    </div>
                    <div className={"mr-10 w-1/3 "}>
                        <p className={"text-[25px] font-bold  mb-5"}>شرکت</p>
                        <ul className={"flex flex-col gap-2"}>
                            <li>
                                نجوه کار کرد
                            </li>
                            <li>
                                قیمت ها
                            </li>
                            <li>
                                شرایط و ضوابط
                            </li>
                            <li>
                                سوالات پرسش
                            </li>
                        </ul>
                    </div>
                    <div className={"mr-10 w-1/3 "}>
                        <p className={"text-[25px] font-bold  mb-5"}>ارتباط با ما</p>
                        <ul className={"flex flex-col gap-2"}>
                            <li>
                                تهران خیابان دماوند نرسیده به میدان امام حسین نبش کوچه عشباه
                            </li>
                            <li>
                                021-33678549
                            </li>
                            <li>
                                coffekoshe@gamil.com
                            </li>
                            <li>
                                www.coffekoshe.com
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;