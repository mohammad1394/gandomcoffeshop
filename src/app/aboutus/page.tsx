import Image from "next/image";
import WhyUsSection from "@/components/templates/home/WhyUsSection";
import Container from "@/components/layout/Container/Container";
import CTASection from "@/components/templates/home/CTASection";

export default function AboutPage() {
    return (

           <main className="bg-[#f8f5f0] text-[#3a2415] ">


               {/* Story */}
               <section className="container mx-auto px-6 py-24">
                  <Container>
                      <div className="grid lg:grid-cols-2 gap-16 items-center">

                          <div>
                              <h2 className="text-4xl font-bold mb-8">
                                  داستان کافه گوشه
                              </h2>

                              <p className="leading-9 text-gray-700">
                                  کافه گوشه با هدف خلق فضایی آرام، گرم و صمیمی
                                  برای عاشقان قهوه متولد شد. ما باور داریم هر
                                  فنجان قهوه می‌تواند شروع یک گفت‌وگوی خوب،
                                  یک ایده جدید یا یک خاطره ماندگار باشد.
                              </p>

                              <p className="leading-9 text-gray-700 mt-6">
                                  از انتخاب بهترین دانه‌های قهوه تا آماده‌سازی
                                  نوشیدنی‌ها با دقت و عشق، همه چیز برای خلق
                                  تجربه‌ای متفاوت طراحی شده است.
                              </p>
                          </div>

                          <div>
                              <Image
                                  src="/assets/about-story.jpg"
                                  alt="Cafe"
                                  width={700}
                                  height={700}
                                  className="rounded-3xl shadow-xl"
                              />
                          </div>

                      </div>
                  </Container>
               </section>

               {/* Values */}
               <WhyUsSection/>

               {/* Team */}
               <section className="container mx-auto px-6 py-24">
                    <Container>
                        <h2 className="text-center text-4xl font-bold mb-14">
                            تیم ما
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {[
                                "teamperson1.png",
                                "teamperson2.png",
                                "teamperson3.png",
                                "teamperson4.png",
                            ].map((item, index) => (
                                <div key={index} className="text-center">

                                    <Image
                                        src={`/assets/${item}`}
                                        alt=""
                                        width={300}
                                        height={300}
                                        className="rounded-2xl w-full h-[320px] object-cover"
                                    />

                                    <h3 className="font-bold mt-5">
                                        عضو تیم
                                    </h3>

                                    <p className="text-gray-500">
                                        باریستا
                                    </p>

                                </div>
                            ))}
                        </div>
                    </Container>
               </section>

               {/* CTA */}
                <CTASection/>

           </main>
    );
}