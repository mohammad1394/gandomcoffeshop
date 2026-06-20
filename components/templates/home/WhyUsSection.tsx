"use client"
import Container from "@/components/modules/Container/Container";
import coffe from "@/assets/image/coffee_blast-2.png";
import WhyUsItem from "@/components/modules/WhyUsItem/WhyUsItem";
import {useEffect, useState} from "react";
import Button from "@/components/modules/Button/Button";

type Feature = {
    id : number;
    title : string;
    desc: string;
    icon: string;
}


function WhyusSection() {

    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:8000/featuresData");
                const data = await res.json();
                setFeatures(data)
            }
            catch (error ){
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
        }

        fetchData();
    }, []);



    return (
        <div className={'mt-40 relative'}>


            <img src={"assets/coffee_blast-2.png"}
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

            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto my-10'}>
                {
                    features.map((item, index) => (
                        <WhyUsItem key={index} {...item}/>
                    ))
                }
            </div>
                <div className={"w-1/2 mx-auto text-center font-[Tanha] mt-5"}>
                    <p className={"text-gray-500 text-[16px] "}>
                        بهترین ایده ها با بهترین قهوه ها شروع میشوند
                    </p>
                    <p className={"text-amber-950 text-[15px] lg:text-[25px] font-bold mt-2"}>
                        از امروز شروع کن
                    </p>
                    <div className={"mt-10"}>
                        <Button>
                            به ما بپیوندید
                        </Button>
                    </div>
                </div>

            </Container>


        </div>
    );
}

export default WhyusSection;