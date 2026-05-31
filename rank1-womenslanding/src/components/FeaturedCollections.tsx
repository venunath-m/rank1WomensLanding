import dress1 from "../assets/featured/f1.png";
import dress2 from "../assets/featured/f2.png";
import dress3 from "../assets/featured/f3.png";
import dress4 from "../assets/featured/f4.png";

const products = [
    {
        title: "BLUE GOWN",
        oldPrice: "999",
        price: "799",
        image: dress1,
        category: "NEW ARRIVALS",
    },
    {
        title: "PINK FROCK",
        oldPrice: "1299",
        price: "999",
        image: dress2,
        category: "BEST SELLERS",
    },
    {
        title: "BABY SET",
        oldPrice: "899",
        price: "599",
        image: dress3,
        category: "EVERYDAY ESSENTIALS",
    },
    {
        title: "LOREM IPSUM",
        oldPrice: "799",
        price: "499",
        image: dress4,
        category: "FESTIVE KIDS WEAR",
    },
];

export default function FeaturedCollections() {
    return (
        <section className="w-full bg-[#FFFFFF] py-14 md:py-[100px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER TITLE BLOCK */}
                <div className="text-center max-w-[800px] mx-auto">
                    <h2 className="text-black font-black uppercase text-[32px] sm:text-[48px] lg:text-[64px] leading-[105%] tracking-tighter">
                        Featured Collections
                    </h2>
                    <p className="mt-3 text-[#6B6B6B] text-base sm:text-lg lg:text-[22px] font-semibold leading-tight">
                        Loved by kids. Trusted by parents.
                    </p>
                </div>

                {/* ACTION NAVIGATION BUTTON */}
                <div className="mt-4 md:mt-6 flex justify-center">
                   
                     <div className="rounded-[10px] border border-[#DDDDDD] p-1 bg-transparent">
    <button className="w-[200px] sm:w-[236px] h-[48px] md:h-[56px] bg-black text-white rounded-[6px] text-[15px] md:text-[16px] font-bold uppercase tracking-wider flex items-center justify-center transition-all duration-300 hover:bg-red-500">
             View All Collections
    </button>
</div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 mb-12">
                    {products.map((item, i) => (
                        <span
                            key={i}
                            className="text-black font-black uppercase text-sm md:text-base tracking-wider"
                        >
                            {item.category}
                        </span>
                    ))}
                </div>
                {/* THE UNIFIED RESPONSIVE PRODUCT GRID 
                    - Mobile/Base: 1 card per row
                    - Small Tablets (sm): 2 cards per row
                    - Laptops & Desktops (lg): Symmetrical 4-column layouts
                */}
                <div className="mt-12 md:mt-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className="group flex flex-col w-full p-4 transition-all duration-300 hover:-translate-y-1"
                        >

                            {/* DYNAMIC CARD CATEGORY BANNER LABEL (Pinned inside individual card context) */}
                            {/* <div className="text-left font-black uppercase text-xs sm:text-sm tracking-wider text-red-500 mb-3 block border-b border-neutral-100 pb-2">
                                {item.category}
                            </div> */}

                            {/* HOVER INTERACTIVE IMAGE BOX CANVAS */}
                            <div className="bg-[#F9F9F9] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px]  overflow-hidden relative flex items-center justify-center p-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.05] pointer-events-none select-none"
                                />
                            </div>

                            {/* PRODUCT INFORMATION PACKAGING */}
                            <div className="pt-4 flex flex-col justify-between flex-grow">
                                <h3 className="uppercase text-lg sm:text-xl lg:text-[18px] font-black tracking-tight leading-tight text-[#8E8E8E]">
                                    {item.title}
                                </h3>

                                {/* PRICING SEGMENTS */}
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-[#8E8E8E] line-through text-sm sm:text-base font-semibold">
                                        ₹{item.oldPrice}
                                    </span>
                                    <span className="text-black text-xl sm:text-2xl font-black">
                                        ₹{item.price}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="mt-12 md:mt-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className="group flex flex-col w-full p-4 transition-all duration-300 hover:-translate-y-1"
                        >

                            {/* DYNAMIC CARD CATEGORY BANNER LABEL (Pinned inside individual card context) */}
                            {/* <div className="text-left font-black uppercase text-xs sm:text-sm tracking-wider text-red-500 mb-3 block border-b border-neutral-100 pb-2">
                                {item.category}
                            </div> */}

                            {/* HOVER INTERACTIVE IMAGE BOX CANVAS */}
                            <div className="bg-[#F9F9F9] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px] rounded-xl overflow-hidden relative flex items-center justify-center p-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.05] pointer-events-none select-none"
                                />
                            </div>

                            {/* PRODUCT INFORMATION PACKAGING */}
                            <div className="pt-4 flex flex-col justify-between flex-grow">
                                <h3 className="uppercase text-lg sm:text-xl lg:text-[18px] font-black tracking-tight leading-tight text-[#8E8E8E]">
                                    {item.title}
                                </h3>

                                {/* PRICING SEGMENTS */}
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-[#8E8E8E] line-through text-sm sm:text-base font-semibold">
                                        ₹{item.oldPrice}
                                    </span>
                                    <span className="text-black text-xl sm:text-2xl font-black">
                                        ₹{item.price}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}