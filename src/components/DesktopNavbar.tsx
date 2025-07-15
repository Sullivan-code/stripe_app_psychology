"use client";

import { 
  BellIcon, 
  HomeIcon, 
  UserIcon, 
  BookOpenIcon, 
  CalendarIcon, 
  MessageCircleIcon, 
  InfoIcon 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

function DesktopNavbar() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link href="/">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Button>
      </Link>

      <Link href="/biblioteca">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <BookOpenIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Biblioteca</span>
        </Button>
      </Link>

      <Link href="/meu-trabalho">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <InfoIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Meu Trabalho</span>
        </Button>
      </Link>

      <Link href="/depoimentos">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <CalendarIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Agenda</span>
        </Button>
      </Link>

      <Link href="/fale-conosco">
        <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
          <MessageCircleIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Fale Conosco</span>
        </Button>
      </Link>

      {isSignedIn ? (
        <>
          <Link href="/notifications">
            <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notificações</span>
            </Button>
          </Link>

          <Link href={`/profile/${user?.username ?? user?.emailAddresses[0]?.emailAddress.split("@")[0]}`}>
            <Button className="flex items-center gap-2 text-gray-800 bg-[#B2E3DC] transition-all duration-300 hover:bg-[#A9D7D3]">
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Perfil</span>
            </Button>
          </Link>

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