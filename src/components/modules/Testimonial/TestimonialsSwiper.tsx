"use client";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation ,Pagination , Autoplay } from 'swiper/modules';



function TestimonialsSwiper({children}: {children: React.ReactNode}) {
    return (
        <div className={"w-[300px] md:w-[500px] lg:w-[700px] xl:w-[1000px]"}>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="swiper-container"
        >

            {React.Children.map(children, (child: React.ReactNode) => (
                <SwiperSlide>
                    {child}
                </SwiperSlide>
            ))}

        </Swiper>
        </div>
    );
}

export default TestimonialsSwiper;