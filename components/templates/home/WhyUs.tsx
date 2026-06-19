import Container from "@/components/modules/Container/Container";
import coffe from "@/assets/image/coffee_blast-2.png";
import WhyUsItem from "@/components/modules/WhyUsItem/WhyUsItem";




function WhyusSection() {



    return (
        <div className={'mt-40 relative'}>


            <img src={"@/assets/image/coffee_blast-2.png"}
                 className="absolute right-[0px] top-[-200px] w-[350px] pointer-events-none select-none" />

            <Container>
                <div className={"w-1/2 mx-auto text-center font-[Tanha] relative"}>

                    <p className={"text-amber-950 text-[20px] lg:text-[35px]  mt-30"}>
                        چرا کافه گوشه؟
                    </p>
                    <p className={"text-gray-500 text-[16px] "}>
                        با کافه گوشه روزت رو بساز !
                    </p>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto my-10'}>

                    
                </div>
                <div className={"w-1/2 mx-auto text-center font-[Tanha] mt-5"}>
                    <p className={"text-gray-500 text-[16px] "}>
                        بهترین ایده ها با بهترین قهوه ها شروع میشوند
                    </p>
                    <p className={"text-amber-950 text-[15px] lg:text-[25px] font-bold mt-2"}>
                        از امروز شروع کن
                    </p>
                    <div className={"mt-10"}>
                        <button>
                            به ما بپیوندید
                        </button>
                    </div>
                </div>

            </Container>


        </div>
    );
}

export default WhyusSection;