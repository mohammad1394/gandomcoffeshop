"use client";
import React, {useState} from 'react';

function NewsletterSection() {

    const [email , setEmail] = useState('');

    const handleSubmit = async (e :React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const Response = await fetch("http://localhost:8000/newsLetters" , {
            method: "POST",
            body: JSON.stringify({email}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (Response.status === 201) {
            alert("ایمیل شما با موفقیت ثبت شد ")
        }
        else {
            alert("ایمیل شما ثبت نشد ")
        }
    }

    return (
        <div className={"bg-[url('/assets/news-banner.png')] w-full h-[70vh] lg:h-[50vh] mt-20 text-white relative "}>

            <div className={"flex flex-col justify-center items-center gap-5 text-center w-[80%] mx-auto py-10"}>
                <h6 className={"text-[30px] font-bold"}>
                    ما را دنبال کنید تا به آخرین اخبار دسترسی داشته باشید
                </h6>
                <p className={"text-[16px]"}>
                    آخرین اخبار، بروزرسانی ها و پیشنهاد های ویژه را از دست ندهید.
                </p>

                    <form onSubmit={handleSubmit} className={'flex flex-col lg:flex-row-reverse gap-5'}>
                        <input
                            placeholder={"ایمیل خود را وارد کنید "}
                            className={"bg-white w-[250px] lg:w-[500px] p-5 text-gray-800 text-right rounded-sm"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className={"bg-amber-200 p-3 text-black rounded-sm"}>
                            ثبت ایمیل
                        </button>
                    </form>
                <img src={"/assets/wing1.png"} className={"absolute left-0 -bottom-10 hidden lg:block z-10"}/>

                <img src={"/assets/wing2.png"} className={"absolute right-0 -bottom-10 hidden lg:block z-10"}/>

            </div>
        </div>
    );
}

export default NewsletterSection;