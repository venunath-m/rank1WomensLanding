import mainImg from "../assets/value/main.jpg";

export default function ValueForMoney() {
  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

  {/* LEFT IMAGE */}
  <div className="lg:col-span-8">
   <div className="aspect-[16/10] overflow-hidden">
  <img
    src={mainImg}
    alt="Value For Money"
    className="w-full h-full object-contain"
  />
</div>
  </div>

  {/* RIGHT CONTENT */}
  <div className="lg:col-span-4">

  <h2 className="uppercase text-white font-black text-[12px] sm:text-[22px] lg:text-[40px] leading-[95%] tracking-tight">
  Value For Money
</h2>

    <p className="mt-6 text-neutral-300 text-base sm:text-lg lg:text-[20px] leading-[170%]">
      At Rank 1 Women, we believe great style should never come at a high cost. Our designs bring
together trend, comfort, and affordability, ensuring you look confident and stylish without
overspending. From daily wear to festive outfits, every piece is crafted to offer quality and
long-lasting comfort.
    </p>

  </div>

</div>

      </div>
    </section>
  );
}