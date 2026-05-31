import img1 from "../assets/playcomfort/img1.jpg";
import img2 from "../assets/playcomfort/img2.jpg";
import img3 from "../assets/playcomfort/img3.jpg";
import img4 from "../assets/playcomfort/img4.jpg";

const features = [
    {
        title: "SOFT, BREATHABLE FABRICS",
        image: img1,
    },
    {
        title: "EASY-TO-WEAR DESIGNS",
        image: img2,
    },
    {
        title: "FLEXIBLE FITS FOR MOVEMENT",
        image: img3,
    },
    {
        title: "LONG-LASTING DURABILITY",
        image: img4,
    },
];

export default function PlayComfort() {
    return (
        <section className="w-full bg-[#FFFFFF] py-14 md:py-24 lg:py-[110px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP HEADER SECTION */}
                <div className="text-center max-w-[900px] mx-auto">
                    <h2 className="uppercase text-black font-black text-[32px] sm:text-[48px] lg:text-[72px] leading-[100%] tracking-tighter">
                        Made For Play & Comfort
                    </h2>
                    <p className="mt-3 text-[#666] text-base sm:text-lg lg:text-[28px] font-semibold leading-tight">
                        Every outfit is designed with kids in mind
                    </p>
                </div>

                {/* THE FLUID GRID SYSTEM */}
                <div className="mt-10 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-[24px]">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden group bg-[#ECECEC] shadow-sm h-[340px] sm:h-[380px] md:h-[420px] lg:h-[480px] w-full"
                        >
                            {/* RESPONSIVE HERO BACKGROUND IMAGE */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] pointer-events-none select-none"
                            />

                            {/* FLOATING TEXT BANNER LABEL */}
                            <div className="absolute left-4 right-4 bottom-4 bg-white  h-[64px] sm:h-[76px] lg:h-[88px] flex items-center px-4 sm:px-[26px] shadow-sm border border-neutral-100">
                                <span className="uppercase text-black font-black text-sm sm:text-base lg:text-[20px] xl:text-[22px] leading-[120%] tracking-tight block">
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}