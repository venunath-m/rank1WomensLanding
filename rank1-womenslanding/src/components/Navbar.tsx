import logo from "../assets/logoHead.png";
import { Search } from "lucide-react";

export default function Navbar() {
    return (
      <header className="fixed top-0 left-0 z-50 w-full">

            <div
                className="
                    w-full
                    h-[96px]
                    px-8
                    flex
                    items-center

                    bg-black/[0.07]
                    backdrop-blur-[60px]

                    border-b border-white/20
                    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                "
            >
                {/* CENTER LOGO */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                   <img
    src={logo}
    alt="Logo"
    className="
        h-16
        object-contain
        opacity-95
        drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]
        mix-blend-screen
    "
/>
                </div>

                {/* RIGHT */}
                <div className="absolute right-[3%] flex items-center">
    <button
        className="
            w-11 h-11
            flex items-center justify-center
            rounded-full
            hover:bg-white/10
            transition-all duration-300
        "
    >
        <Search
            size={30}
            className="text-white"
        />
    </button>
</div>
            </div>

        </header>
    );
}