
import Button from "@/components/modules/Button/Button";
import Container from "@/components/modules/Container/Container";


function IntroSection() {
    return (
       <>
           <div className={"relative"}>
               <Container>
                   <div className="relative flex flex-col items-center lg:flex-row-reverse ">

                       <div className={"flex justify-center md:w-1/2"}>
                           <img
                               src={"/assets/banner.png"}
                               className={'w-[60%] h-auto'}
                           />
                       </div>
                       <div className={"flex flex-col text-right md:w-1/2 font-[Tanha] gap-5 justify-end"}>
                           <h3 className={"text-[40px] text-amber-950 "}>
                               به دنبال بهترین قهوه باشید
                           </h3>
                           <p className={"text-[18px] text-gray-500"}>
                               قهوه یکی از محبوب‌ترین نوشیدنی‌های جهان است که از دانه‌های گیاه قهوه تهیه می‌شود. این نوشیدنی با عطر
                               و طعم بی‌نظیر خود، قرن‌هاست که بخش جدایی‌ناپذیری از زندگی روزمره مردم در سراسر جهان است. قهوه علاوه
                               بر انرژی‌بخشی، سرشار از آنتی‌اکسیدان‌هاست که می‌تواند فوایدی برای سلامت قلب و مغز داشته باشد.
                               روش‌های تهیه قهوه متنوع هستند؛ از اسپرسوی غلیظ و پرانرژی گرفته تا قهوه‌های دمی و قهوه ترک که هر کدام
                               طعم و ویژگی منحصربه‌فردی دارند. این نوشیدنی نه تنها به عنوان راهی برای شروع روز، بلکه به عنوان یک
                               فرصت برای لذت بردن و آرامش نیز شناخته می‌شود.
                           </p>
                           <div>
                               <Button className={"text-[16px] "}>
                                   ثبت سفارش
                               </Button>
                           </div>
                       </div>
                   </div>

                   <div className="absolute left-0 bottom-[-150px] lg:bottom-[-110px]">
                       <img
                           src={"/assets/coffee_blast.png"}
                           className=""
                       />
                   </div>
               </Container>
           </div>
       </>
    );
}

export default IntroSection;