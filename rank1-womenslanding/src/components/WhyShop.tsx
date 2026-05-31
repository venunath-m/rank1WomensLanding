import w1 from "../assets/whyshop/w1.jpg";
import w2 from "../assets/whyshop/w2.jpg";
import w3 from "../assets/whyshop/w3.jpg";
import w4 from "../assets/whyshop/w4.jpg";
import w5 from "../assets/whyshop/w5.jpg";
import wsm from "../assets/whyshop/wsm.jpg";

// Exact custom 8-point sparkle vector matching your screenshots
const SparkleIcon = () => (
  <svg
    className="w-5 h-5 text-pink-400 shrink-0 mt-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 5" />
  </svg>
);

export default function WhyShop() {
  const values = [
    { title: "SOFT, SKIN-FRIENDLY FABRICS", img: w1 },
    { title: "DURABLE FOR PLAY & DAILY WEAR", img: w2 },
    { title: "AFFORDABLE PRICING FOR GROWING KIDS", img: w3 },
    { title: "FUN, TRENDY & COLORFUL DESIGNS", img: w4 },
    { title: "SAFE SHOPPING & SECURE CHECKOUT", img: w5 },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Exact 3-Column Grid Layout matching screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          
          {/* COLUMN 1: INTRO TITLE & SUB-IMAGE */}
          <div className="flex flex-col justify-between min-h-[400px] lg:h-full py-2">
            <div className="space-y-3 lg:translate-y-10">
              <h2 className="text-[36px] lg:text-[42px] font-black tracking-tight leading-[105%] text-black uppercase">
                Why Shop At <br />
                Rank 1 WOMEN?
              </h2>
              <p className="text-[14px] font-medium text-neutral-500 tracking-wide">
                Fashion that looks good and feels right.
              </p>
            </div>
            
            {/* Small lookbook thumbnail block from Image 1 */}
            <div className="w-full max-w-[280px] aspect-[4/3] overflow-hidden mt-8">
              <img 
                src={wsm} 
                alt="Brand lookbook mini overview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DYNAMIC RENDER OF THE 5 VALUE PROP CARDS */}
          {values.map((item, i) => (
            <div key={i} className="flex flex-col w-full">
              
              {/* IMAGE CONTAINER WITH BOTTOM-ALIGNED NEGATIVE CLIP DIGIT */}
              <div className="relative w-full aspect-[4/5] bg-neutral-300 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Large white numbers positioned exactly over the bottom-left edge */}
                <span className="absolute bottom-[-25px] left-[-5px] text-[120px] sm:text-[140px] lg:text-[160px] font-black text-white leading-none select-none tracking-tighter">
                  {i + 1}
                </span>
              </div>

              {/* FOOTER BLOCK FOR THE LABELS */}
              <div className="pt-4 flex items-start gap-2">
                <SparkleIcon />
                <h3 className="font-bold text-[13px] lg:text-[14px] leading-[130%] tracking-wide uppercase text-neutral-900 max-w-[280px]">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}