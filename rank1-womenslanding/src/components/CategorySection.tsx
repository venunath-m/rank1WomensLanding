import cat1 from "../assets/categories/1.jpg";
import cat2 from "../assets/categories/2.jpg";
import cat3 from "../assets/categories/3.jpg";
import cat4 from "../assets/categories/4.jpg";

export default function CategorySection() {
    const categories = [
        {
            img: cat1,
            title: "EFFORTLESS EVERYDAY OUTFITS",
            badge: "casual wear"
        },
        {
            img: cat2,
            title: "ELEGANT STYLES FOR SPECIAL OCCASIONS",
            badge: "ethnic wear"
        },
        {
            img: cat3,
            title: "SMART, COMFORTABLE OFFICE LOOKS",
            badge: "work wear"
        },
         {
            img: cat4,
            title: "CHICK OUTFITS FOR STANDOUT MOMENTS",
            badge: "party wear"
        },
    ];

    return (
        <section className="w-full py-12 md:py-20 bg-[#FFFFFF]">

            {/* TITLE CONTAINER */}
            <div className="text-center mb-8 md:mb-14 px-4">
                <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black uppercase tracking-tight text-gray-900 leading-none">
                    SHOP BY CATEGORY
                </h2>
                <p className="mt-3 text-sm sm:text-base font-medium text-neutral-500 max-w-[500px] mx-auto">
                    Explore styles curated for every mood and moment.
                </p>
            </div>

            {/* CARDS GRID CONTAINER */}
            {/* - Mobile/Small Screens: Stacked 1 column
                - Tablets / Surface Pro (sm/md): Transitions seamlessly through 2 columns
                - Laptops & Desktops (lg): Settles into a clean 3 column spread
            */}
            <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">

                {categories.map((item, i) => (
                    <div
                        key={i}
                        className={`
                            group relative overflow-hidden bg-white shadow-sm
                            border border-neutral-100 transition-all duration-300 
                            hover:-translate-y-2 hover:shadow-xl cursor-pointer w-full flex flex-col
                            ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""} 
                        `}
                    >
                        {/* IMAGE CANVAS BOX */}
                        {/* Using responsive viewport-based height properties ensures clean dynamic proportions */}
                        <div className="h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] w-full overflow-hidden relative bg-neutral-50">

                            {/* DYNAMIC CORNER BADGE LAYER */}
                            <div className="absolute top-4 left-4 z-20">
                                <div className="bg-white/80 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-md shadow-sm">
                                    <p className="text-red-600 font-extrabold text-[11px] tracking-wider uppercase whitespace-nowrap">
                                        {item.badge}
                                    </p>
                                </div>
                            </div>

                            {/* CARD IMAGE */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* TEXT PACKAGING FOOTER */}
                        <div className="p-5 md:p-6 flex-grow flex items-center white justify-center bg-white border-t border-neutral-50">
                            <h3 className="text-sm sm:text-base whitespace-nowrap lg:text-[14px] font-black text-gray-900 tracking-wide text-center leading-[135%] uppercase max-w-[280px] mx-auto">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}