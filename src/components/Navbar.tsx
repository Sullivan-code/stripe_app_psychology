import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

async function Navbar() {
  const user = await currentUser();
  if (user) await syncUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="relative group">
              <span
                className="text-xl font-bold font-mono tracking-wider px-3 py-1 border-2 rounded-lg transition-all duration-500"
                style={{ color: "#2B2B28", borderColor: "#2B2B28" }}
              >
                Raphael Alcantara
              </span>

              {/* Efeito ao passar o mouse atualizado */}
              <span 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#2B2B28] to-[#B2E3DC] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700 scale-110 group-hover:scale-125 z-[-1]"
                style={{
                  background: `linear-gradient(45deg,rgb(40, 255, 226) 0%, #B2E3DC 100%)`
                }}
              ></span>
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;