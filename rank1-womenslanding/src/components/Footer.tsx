
import logoFoot from "../assets/logoFoot.png";
export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white pt-16 md:pt-20 lg:pt-24 pb-6 relative overflow-hidden select-none">

            {/* MAIN CONTENT CONTAINER */}
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                {/* TOP HALF: Logo, Tagline, and Navigation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-10 lg:pb-14 border-b border-neutral-800/50">

                    {/* Left Side: Logo & Brand Tagline */}
                    <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
                        {/* Logo */}
                        <div className="w-[100px] sm:w-[115px]">
                            <img
                                src={logoFoot}
                                alt="Rank 1 Kids Logo"
                                className="w-full h-auto object-contain"
                            />
                            
                        </div>

                        {/* Headline matching image custom text coloring */}
                        <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[110%] font-black uppercase tracking-tight max-w-[400px]">
                            <span className="text-white uppercase bg-clip-text bg-gradient-to-r from-[#FFA0A0] to-[#A0C8FF]">
                                Rank 1 Women -
                            </span><br />
                            <span className="text-white uppercase"> Trendy Fashion</span><br />
                            <span className="text-white uppercase">At Smart Prices</span>
                        </h2>
                    </div>

                    {/* Right Side: Shared Content Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-10 mt-16 lg:mt-32">

                        {/* Column 1: Contact Us */}
                        <div className="space-y-4 col-span-2 md:col-span-1">
                            <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-widest">
                                Contact Us
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-[14px] sm:text-[15px] font-bold text-white">
                                    <svg className="w-4 h-4 flex-shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 1234 567 890</span>
                                </li>
                                <li className="flex items-center gap-3 text-[14px] sm:text-[15px] font-bold text-white break-all">
                                    <svg className="w-4 h-4 flex-shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>abcdefghijklmn@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Shop By Category */}
                        <div className="space-y-4">
                            <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-widest">
                                Shop By Category
                            </h3>
                            <ul className="space-y-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-wide">
                                <li>
                                    <a href="#boys" className="text-white hover:text-[#da1a1a] transition-colors">Boys Wear</a>
                                </li>
                                <li>
                                    <a href="#girls" className="text-white hover:text-[#da1a1a] transition-colors">Girls Wear</a>
                                </li>
                                <li>
                                    <a href="#baby" className="text-white hover:text-[#da1a1a] transition-colors">Baby Wear</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Company */}
                        <div className="space-y-4">
                            <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-widest">
                                Company
                            </h3>
                            <ul className="space-y-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-wide">
                                <li>
                                    <a href="#testimonials" className="text-white hover:text-[#da1a1a] transition-colors">Testimonials</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Be Part of Our Community */}
                        <div className="space-y-4">
                            <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                                Be Part of Our Community
                            </h3>
                            <div className="flex items-center gap-3">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-transparent border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-transparent border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.81.058 2.385.11 3.57 1.305 3.679 3.678.048 1.026.058 1.381.058 3.81s-.01 2.784-.058 3.81c-.11 2.373-1.296 3.562-3.678 3.678-1.026.048-1.381.058-3.81.058s-2.784-.01-3.81-.058c-2.386-.11-3.57-1.305-3.679-3.678-.048-1.026-.058-1.381-.058-3.81s.01-2.784.058-3.81c.11-2.373 1.296-3.562 3.678-3.678 1.026-.048 1.381-.058 3.81-.058m0-1.541c-2.47 0-2.78.01-3.748.054-2.455.112-4.09 1.004-4.748 2.374-.31.644-.55 1.378-.636 2.522C3.14 6.38 3.125 6.72 3.125 12s.015 5.62.058 6.59c.086 1.144.326 1.878.636 2.522.658 1.37 2.293 2.262 4.748 2.374.968.044 1.278.054 3.748.054s2.78-.01 3.749-.054c2.454-.112 4.09-1.004 4.747-2.374.31-.644.55-1.378.636-2.522.043-.97.058-1.31.058-6.59s-.015-5.62-.058-6.59c-.086-1.144-.326-1.878-.636-2.522-.657-1.37-2.293-2.262-4.747-2.374-.969-.044-1.279-.054-3.749-.054zm0 7.378c-2.282 0-4.131 1.85-4.131 4.132 0 2.281 1.849 4.131 4.131 4.131 2.282 0 4.132-1.85 4.132-4.131 0-2.283-1.85-4.132-4.132-4.132zm0 6.722c-1.43 0-2.59-1.16-2.59-2.59 0-1.43 1.16-2.59 2.59-2.59 1.43 0 2.59 1.16 2.59 2.59 0 1.43-1.16 2.59-2.59 2.59zm5.951-7.546c0 .515-.417.933-.932.933-.516 0-.933-.418-.933-.933 0-.515.417-.932.933-.932.515 0 .932.417.932.932z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM HALF: Copyright text sitting right below the grid line */}
                <div className="flex justify-end items-center pt-5 relative z-20">
                    <span className="text-white text-[11px] font-bold tracking-widest uppercase">
                        Copyright © 2026 Rank1
                    </span>
                </div>
                <div className="relative w-full z-0 pointer-events-none select-none overflow-hidden pb-6 lg:pb-10">

                    <div className="relative max-w-[1376px] mx-auto min-h-[322px] px-8 pb-6 flex items-center lg:items-end">

                        <div className="flex items-center lg:items-end justify-start gap-4 w-full">

                            <h1
                                className="text-[21vw] font-black uppercase leading-[0.75] text-white/15 mix-blend-overlay tracking-[-0.01em] translate-y-[2.5vw]"
                                style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}
                            >
                                Rank
                            </h1>

                            <h1
                                className="text-[21vw] font-black uppercase leading-[0.72] text-[#da1a1a] tracking-[-0.05em] translate-y-[3vw]"
                                style={{ fontFamily: '"Arial Black", "Impact", sans-serif' }}
                            >
                                1
                            </h1>

                        </div>

                    </div>

                </div>
            </div>

            {/* =========================================================
            PERFECT ALIGNED BACKGROUND WATERMARK LAYER ("RANK 1")
            Moved down to the absolute base layer of the container so 
            the copyright and links naturally stack on top.
            ========================================================= */}


        </footer>
    );
}