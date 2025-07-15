"use client"

import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";

const FaleConosco: React.FC = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="relative w-full min-h-screen">
      {/* Background com imagem e overlay branco translúcido */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/raphapsi.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center relative z-10">
        {/* Título */}
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Fale Conosco</h1>

        {/* Descrição */}
        <p className="text-xl mb-8 max-w-2xl text-gray-600">
          Estamos aqui para ajudar! Entre em contato conosco através das nossas redes sociais ou WhatsApp.
        </p>

        {/* Formulário de email (apenas se logado) */}
        {isSignedIn && (
          <div className="w-full max-w-md bg-[#F0F7F7] p-8 rounded-lg shadow-2xl mb-12 transition-all duration-300 hover:shadow-3xl border-l-4 border-[#2A5C5A]">
            <h2 className="text-2xl font-bold mb-6 text-[#2A5C5A]">Envie-nos um Email</h2>
            <form action="mailto:raphaelalcantaradasilva@gmail.com" method="post" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#2A5C5A]">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-[#2A5C5A] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A5C5A]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#2A5C5A]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-[#2A5C5A] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A5C5A]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-[#2A5C5A]">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-[#2A5C5A] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A5C5A]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#2A5C5A]">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-[#2A5C5A] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A5C5A]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white py-3 px-6 rounded-md font-bold transition-all duration-300 bg-gradient-to-r from-[#2A5C5A] to-[#3A7C7A] hover:from-[#1A4C4A] hover:to-[#2A5C5A]"
              >
                Enviar
              </button>
            </form>
          </div>
        )}

        {/* Ícones das redes sociais */}
        <div className="flex space-x-8">
          <a
            href="https://www.instagram.com/psicologoraphaelalcantaraa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-full bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] hover:from-[#722CA1] hover:via-[#B02573] hover:to-[#D1205B] transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <FaInstagram size={50} className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/PsicologoRaphaelAlcantara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-full bg-[#1877F2] hover:bg-[#166FE5] transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <FaFacebook size={50} className="text-white" />
          </a>
          <a
            href="https://wa.me/5521992078455"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <FaWhatsapp size={50} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
