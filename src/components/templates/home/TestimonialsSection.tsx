    import React from 'react';
    import Image from 'next/image';
    import Container from "@/components/layout/Container/Container";
    import TestimonialsSwiper from "@/components/modules/Testimonial/TestimonialsSwiper";
    import TestimonialCard from "@/components/modules/Testimonial/TestimonialCard";

    export interface Comment {
        id: string
        usename: string
        img: string
        productID: number
        score: number
        body: string
    }

    async function TestimonialsSection() {

        const res = await fetch('http://localhost:8000/customers');
        const data: Comment[] = await res.json();
        console.log(data);

        return (
            <div className="mt-20 flex flex-col justify-center items-center overflow-hidden text-center shadow-2xl p-5
                             w-[80%] mx-auto bg-gray-100 mt-10 mb-50 relative ">
                <Image src="/assets/coffee_blast-2.png"
                       alt=""
                       width={300}
                       height={300}
                       className={"absolute  -right-[12.5%] -top-[22%] w-[300px]   "}/>
                <Container>
                    <div className="p-10">
                        <h6 className={"text-amber-950 text-[40px] "}>نظرات مشتریان در مورد ما</h6>
                        <p className={"text-gray-500 text-[16px]"}>مشتریان ما همیشه از خدمات ما رضایت داشته اند . برخی از نظرات انها رو در زیر مشاهده میکنید</p>
                    </div>
                    <TestimonialsSwiper>
                        {
                            data.map((item: Comment) => (
                                <TestimonialCard {...item} key={item.id} />
                            ))
                        }
                    </TestimonialsSwiper>

                </Container>
                <Image src="/assets/coffee_blast.png"
                       alt=""
                       width={300}
                       height={300}
                       className={"absolute  -left-[20%]  -bottom-50 w-[300px]"}/>
            </div>
        );
    }

    export default TestimonialsSection;