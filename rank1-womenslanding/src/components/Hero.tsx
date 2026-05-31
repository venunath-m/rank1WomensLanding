import { useEffect, useRef } from "react";

import bg from "../assets/herobackground/hero1.jpg";

import img1 from "../assets/heroImagesScroll/1.jpg";
import img2 from "../assets/heroImagesScroll/2.jpg";
import img3 from "../assets/heroImagesScroll/3.jpg";
import img4 from "../assets/heroImagesScroll/4.jpg";
import img5 from "../assets/heroImagesScroll/5.jpg";
import img6 from "../assets/heroImagesScroll/6.jpg";
import img7 from "../assets/heroImagesScroll/7.jpg";
import Navbar from "./Navbar";

export default function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const images = [img1, img2, img3, img4, img5, img6, img7];

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let frame: number;
        let offset = 0;
        let halfWidth = 0;

        const calculateWidth = () => {
            halfWidth = el.scrollWidth / 2;
        };

        const timeoutId = setTimeout(calculateWidth, 100);
        window.addEventListener("resize", calculateWidth);

        const scroll = () => {
            if (!el || halfWidth === 0) {
                frame = requestAnimationFrame(scroll);
                return;
            }

            // Smooth linear speed rate
            offset += 1.25;

            if (offset >= halfWidth) {
                offset -= halfWidth;
            }

            el.style.transform = `translate3d(${-offset}px, 0, 0)`;

            const children = Array.from(el.children) as HTMLDivElement[];
            const screenCenter = window.innerWidth / 2;

            children.forEach((child) => {
                const rect = child.getBoundingClientRect();
                const childCenter = rect.left + rect.width / 2;

                const position = (childCenter - screenCenter) / screenCenter;
                const normalizedPos = Math.min(Math.max(position, -1), 1);
                const t = Math.abs(normalizedPos);

                const eased = 1 - Math.pow(t, 1.6);

                const isSmallScreen = window.innerWidth < 1024;
                const baseScale = isSmallScreen ? 0.85 : 0.75;
                const dynamicGrowth = isSmallScreen ? 0.25 : 0.45; // Controlled growth limit to avoid layout collisions

                const finalScale = baseScale + eased * dynamicGrowth;

                // Lift center cards slightly up to balance out the height scaling visual weight
                const translateY = -Math.max(0, (finalScale - baseScale) * 20);
                const opacity = 0.5 + (1 - t) * 0.5;

                const animatedTarget = child.querySelector(".animate-target") as HTMLDivElement;
                if (animatedTarget) {
                    animatedTarget.style.transform = `scale(${finalScale}) translateY(${translateY}px)`;
                    animatedTarget.style.opacity = `${opacity}`;
                }
            });

            frame = requestAnimationFrame(scroll);
        };

        frame = requestAnimationFrame(scroll);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", calculateWidth);
        };
    }, []);

    return (
        <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={bg}
                    alt="Background Banner Pattern"
                    className="w-full h-full object-cover object-center scale-100 brightness-100 contrast-105"
                />
            </div>

            {/* OVERLAY */}
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            {/* WATERMARK */}
            <div className="relative inset-0 z-[15] flex items-center justify-center pointer-events-none ">
                <div className="flex items-center gap-20 select-none translate-y-[80px]">

                    <h1
                        className="
            text-[14vw]
            font-semibold
            uppercase
            leading-none
            text-white
            tracking-[.8em]
        "
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        Rank
                    </h1>

                    <h1
                        className="
            text-[14vw]
            font-semibold
            uppercase
            leading-none
            text-[#da1a1a]
            
        "
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        1
                    </h1>

                </div>
            </div>
            {/* NAVBAR */}
            {/* <div className="absolute top-0 left-0 w-full z-50">
            <Navbar />
        </div> */}

            {/* HERO CONTENT */}
            <div
    className="
        relative z-20
        min-h-[85vh] lg:min-h-[90vh]
        flex items-center
        w-full
        pl-6 pr-20
    "
>

                {/* BRAND HEADINGS & TEXT BLOCK */}
                <div className="flex flex-col items-start text-left w-full max-w-[720px] gap-3 md:gap-4">
                   <h1 className="font-sans font-semibold text-[32px] sm:text-[42px] lg:text-[56px] leading-[105%] tracking-[-0.04em] uppercase text-white">
    EVERYDAY FASHION
</h1>

<h1 className="font-sans font-semibold text-[32px] sm:text-[42px] lg:text-[56px] leading-[105%] tracking-[-0.04em] uppercase text-white">
     FOR MODERN WOMEN
</h1>



                    <p className="font-sans font-semibold text-[18px] sm:text-[18px] lg:text-[24px] leading-[140%] text-white max-w-[620px] mt-2 px-2">
                        Discover trendy, comfortable, and budget-friendly styles, made, for everyday life.
                    </p>

                    <div className="mt-4 md:mt-6 flex justify-start">
                        <div className="rounded-[10px] border border-[#DDDDDD] p-1 bg-transparent">
                            <button className="w-[200px] sm:w-[236px] h-[48px] md:h-[56px] bg-black text-white rounded-[6px] text-[15px] md:text-[16px] font-bold uppercase tracking-wider flex items-center justify-center transition-all duration-300 hover:bg-red-500">
                                View New Arrivals
                            </button>
                        </div>
                    </div>
                </div>

                {/* SCROLL STRIP */}


            </div>

        </section>
    );
}