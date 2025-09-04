"use client";

import {
  BellIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
  MessageCircleIcon,
  InfoIcon,
  ShoppingCartIcon,
  BoxesIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useCartStore } from "../../store/cart-store";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isSignedIn, user } = useUser();
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex md:hidden items-center space-x-2">
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6">
            {/* Home */}
            <Link href="/">
              <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                <HomeIcon className="w-4 h-4" />
                Home
              </Button>
            </Link>

            {/* Products */}
            <Link href="/products">
              <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                <BoxesIcon className="w-4 h-4" />
                Products
              </Button>
            </Link>

            {/* Meu Trabalho */}
            <Link href="/meu-trabalho">
              <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                <InfoIcon className="w-4 h-4" />
                Meu Trabalho
              </Button>
            </Link>

            {/* Depoimentos */}
            <Link href="/depoimentos">
              <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                <MessageCircleIcon className="w-4 h-4" />
                Depoimentos
              </Button>
            </Link>

            {/* Fale Conosco */}
            <Link href="/fale-conosco">
              <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                <MessageCircleIcon className="w-4 h-4" />
                Fale Conosco
              </Button>
            </Link>

            {isSignedIn ? (
              <>
                {/* Notificações */}
                <Link href="/notifications">
                  <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                    <BellIcon className="w-4 h-4" />
                    Notificações
                  </Button>
                </Link>

                {/* Checkout (com badge) */}
                <Link href="/checkout">
                  <Button className="relative flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                    <ShoppingCartIcon className="w-4 h-4" />
                    Checkout
                    {cartCount > 0 && (
                      <span className="absolute right-4 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>

                {/* Perfil */}
                <Link href={`/profile/${user?.username ?? user?.emailAddresses[0]?.emailAddress.split("@")[0]}`}>
                  <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                    <UserIcon className="w-4 h-4" />
                    Perfil
                  </Button>
                </Link>

                {/* Logout */}
                <SignOutButton>
                  <Button className="flex items-center gap-3 justify-start w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                    <LogOutIcon className="w-4 h-4" />
                    Logout
                  </Button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode="modal">
                <Button className="w-full text-gray-800 bg-[#B2E3DC] hover:bg-[#A3D1CC] transition-all duration-300">
                  Entrar
                </Button>
              </SignInButton>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
