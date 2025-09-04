"use client";

import { 
  BellIcon, 
  HomeIcon, 
  UserIcon, 
  MessageCircleIcon, 
  InfoIcon,
  ShoppingCartIcon,
  BoxesIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useCartStore } from "../../store/cart-store";

function DesktopNavbar() {
  const { isSignedIn, user } = useUser();
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Home */}
      <Link href="/">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Button>
      </Link>

      {/* Produtos */}
      <Link href="/products">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <BoxesIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Produtos</span>
        </Button>
      </Link>

      {/* Meu Trabalho */}
      <Link href="/meu-trabalho">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <InfoIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Meu Trabalho</span>
        </Button>
      </Link>

      {/* Depoimentos */}
      <Link href="/depoimentos">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <MessageCircleIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Depoimentos</span>
        </Button>
      </Link>

      {isSignedIn ? (
        <>
          {/* Notificações */}
          <Link href="/notifications">
            <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3] relative">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notificações</span>
            </Button>
          </Link>

          {/* Checkout */}
          <Link href="/checkout">
            <Button className="relative flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
              <ShoppingCartIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Checkout</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Perfil */}
          <Link href={`/profile/${user?.username ?? user?.emailAddresses[0]?.emailAddress.split("@")[0]}`}>
            <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Perfil</span>
            </Button>
          </Link>

          {/* User Menu */}
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button className="text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
            Entrar
          </Button>
        </SignInButton>
      )}
    </div>
  );
}

export default DesktopNavbar;
