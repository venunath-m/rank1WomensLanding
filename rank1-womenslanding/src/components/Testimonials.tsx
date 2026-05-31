import { useState } from "react";
import person1 from "../assets/testimonials/person1.jpg";
import person2 from "../assets/testimonials/person2.jpg";
import person3 from "../assets/testimonials/person3.jpg";

const testimonials = [
    {
        image: person1,
        name: "SARAH MITCHELL",
        location: "California, USA",
        review:
            "As a mom, quality and trust matter the most to me. I’m so happy with the service and the care put into every detail. It made my life easier and gave me complete peace of mind.",
        rating: 4,
    },
    {
        image: person2,
        name: "CHARLOTTE DAVIS",
        location: "Manchester",
        review:
            "The quality and attention to detail truly exceeded my expectations. The entire experience was smooth, professional, and trustworthy. I would definitely recommend them to anyone looking for reliable service.",
        rating: 4,
    },
    {
        image: person3,
        name: "DANIEL THOMPSON",
        location: "London",
        review:
            "Excellent service from start to finish. The team was responsive, professional, and delivered exactly what was promised. I’m very satisfied with the results.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="w-full bg-[#F5F5F5] py-14 md:py-24 lg:py-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center">
                    <h2 className="uppercase text-black font-black text-[36px] sm:text-[54px] lg:text-[72px] leading-[100%] tracking-tighter">
                        Trusted By Our Clients
                    </h2>
                    <p className="mt-2 sm:mt-4 text-[#666] text-base sm:text-xl lg:text-[28px] font-semibold">
                        Testimonials
                    </p>
                </div>

                {/* TESTIMONIAL RESPONSIVE GRID */}
                <div className="mt-10 md:mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F5F5F5] border-l border-r border-neutral-300 px-4 sm:px-6 lg:px-[38px] py-8 md:py-10 flex flex-col items-center text-center justify-between"
                        >
                            <div className="flex flex-col items-center w-full">
                                {/* PROFILE IMAGE */}
                                <div className="w-[100px] sm:w-[130px] lg:w-[150px] h-[100px] sm:h-[130px] lg:h-[150px] rounded-full overflow-hidden shadow-sm bg-neutral-200">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover pointer-events-none select-none"
                                    />
                                </div>

                                {/* RATING STARS */}
                                <div className="flex gap-1.5 mt-6 lg:mt-[34px]">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-2xl lg:text-[32px] leading-none select-none ${star <= item.rating
                                                    ? "text-[#FF1E1E]"
                                                    : "text-neutral-300"
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                                {/* REVIEW TEXT BODY */}
                                <p className="mt-5 lg:mt-[34px] text-neutral-600 text-sm sm:text-base lg:text-[20px] leading-relaxed font-semibold max-w-[380px]">
                                    “{item.review}”
                                </p>
                            </div>

                            {/* USER META METRICS */}
                            <div className="mt-6 lg:mt-[42px]">
                                <h3 className="uppercase text-black font-black text-lg sm:text-xl lg:text-[28px] leading-tight">
                                    {item.name}
                                </h3>
                                <span className="mt-1 block text-[#666] text-sm sm:text-base lg:text-[22px] font-semibold">
                                    {item.location}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM NAVIGATION LAYER */}
                <div className="flex justify-center md:justify-end mt-8 md:mt-[60px]">
                    <div className="flex items-center gap-[18px]">
                        <button
                            onClick={() =>
                                setActiveIndex((prev) =>
                                    prev === 0 ? testimonials.length - 1 : prev - 1
                                )
                            }
                            className="uppercase text-neutral-500 text-lg lg:text-[24px] font-bold hover:text-black transition-colors duration-200"
                        >
                            Prev
                        </button>
                        <div className="flex items-center ">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-[3px] transition-all duration-300 ${activeIndex === index
                                            ? "w-[40px] bg-black"
                                            : "w-[18px] bg-neutral-300"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() =>
                                setActiveIndex((prev) =>
                                    prev === testimonials.length - 1 ? 0 : prev + 1
                                )
                            }
                            className="uppercase text-[#FF1E1E] text-lg lg:text-[24px] font-bold hover:opacity-80 transition-opacity duration-200"
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}