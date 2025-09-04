"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { isSignedIn } = useUser();

  const officeImages = Array.from({ length: 8 }, (_, i) => 
    `/images/consultorio/${i + 1}.jpg`
  );

  return (
    <div className="relative w-full h-full">
      {/* Fundo com imagem e overlay */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/raphapsi.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#FFFFFF]/90"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B28] mb-8">
            Raphael Alcantara - Psicólogo Clínico
          </h1>

          {/* Seção Quem sou eu */}
          <div className="bg-[#B2E3DC] rounded-lg p-8 shadow-lg border-2 border-[#A9D7D3] mb-12 text-left">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/images/raphapsi.jpg"
                alt="Raphael Alcantara"
                className="w-48 h-48 rounded-full border-4 border-[#A9D7D3]"
              />
              <div>
                <h2 className="text-3xl font-bold text-[#2B2B28] mb-4">
                  Quem sou eu
                </h2>
                <p className="text-lg mb-4">
                  Com mais de 10 anos de experiência clínica, já auxiliei centenas
                  de pacientes a superarem seus desafios emocionais. Sou
                  especializado em Terapia Cognitivo-Comportamental e minha
                  abordagem combina:
                </p>
                <ul className="list-disc list-inside space-y-2 font-semibold">
                  <li>Rigor científico comprovado</li>
                  <li>Técnicas validadas internacionalmente</li>
                  <li>Planejamento personalizado para cada caso</li>
                  <li>Acompanhamento de resultados mensuráveis</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-lg italic font-semibold text-[#2B2B28]">
              "Seu problema tem solução - e juntos vamos encontrá-la de forma
              estruturada e baseada em evidências científicas."
            </p>
          </div>

          {/* Seção Como funciona a TCC */}
          <div className="bg-[#B2E3DC] rounded-lg p-6 shadow-lg border-2 border-[#A9D7D3] mb-12">
            <h2 className="text-2xl font-bold text-[#2B2B28] mb-4">
              📚 Como funciona a Terapia Cognitivo-Comportamental?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F9F6ED] p-4 rounded-lg border border-[#A9D7D3]">
                <h3 className="text-xl font-bold mb-3">🔍 Fase de Avaliação</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Identificação dos padrões de pensamento</li>
                  <li>Mapeamento de comportamentos problemáticos</li>
                  <li>Definição de objetivos claros</li>
                </ul>
              </div>
              <div className="bg-[#F9F6ED] p-4 rounded-lg border border-[#A9D7D3]">
                <h3 className="text-xl font-bold mb-3">🛠️ Fase de Intervenção</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Técnicas de reestruturação cognitiva</li>
                  <li>Exercícios comportamentais práticos</li>
                  <li>Desenvolvimento de habilidades emocionais</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção Benefícios */}
          <div className="bg-[#B2E3DC] rounded-lg p-6 shadow-lg border-2 border-[#A9D7D3] mb-12">
            <h3 className="text-2xl font-bold text-[#2B2B28] mb-6">
              ✅ Por Que Escolher Meus Serviços?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#F9F6ED] p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-bold mb-2">Abordagem Direta</h4>
                <p>Foco na solução prática de problemas</p>
              </div>
              <div className="bg-[#F9F6ED] p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">📈</div>
                <h4 className="font-bold mb-2">Resultados Mensuráveis</h4>
                <p>Avaliação contínua do progresso</p>
              </div>
              <div className="bg-[#F9F6ED] p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🤝</div>
                <h4 className="font-bold mb-2">Atendimento Humanizado</h4>
                <p>Respeito à individualidade de cada paciente</p>
              </div>
            </div>
          </div>

          {/* CTA Agendamento */}
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-[#2B2B28] mb-6">
              Pronto para dar o primeiro passo rumo à sua evolução emocional?
            </p>
            <Link href="https://api.whatsapp.com/send?phone=5521992078455">
              <button className="px-8 py-3 bg-[#2B2B28] hover:bg-[#A9D7D3] text-[#F9F6ED] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:text-[#2B2B28]">
                Agendar Avaliação Inicial
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de inspiração e imagem */}
      <div className="relative z-10 w-full flex justify-center px-4 my-8">
        <div className="bg-[#F9F6ED] py-16 px-6 sm:px-8 rounded-3xl shadow-xl border-2 border-[#A9D7D3] max-w-4xl w-full">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                Uma mensagem pra você
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Cuidar da mente é um ato de coragem. Aqui, você encontrará
                acolhimento, escuta e direção para reconstruir o que te dói. <br />
                A psicoterapia não é para quem tem problemas, mas para quem tem
                força de enfrentá-los. <br />
                E se você chegou até aqui, já deu o primeiro passo.
              </p>
            </div>
            <div>
              <Image
                src="/images/rp11.jpg"
                alt="Imagem do consultório Raphael Alcantara"
                width={600}
                height={400}
                className="mx-auto rounded-lg shadow-lg border border-[#A9D7D3]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seção FAQ */}
      <div className="relative z-10 w-full flex justify-center px-4 my-8 pb-16">
        <div className="bg-[#B2E3DC] py-16 px-6 sm:px-8 rounded-3xl shadow-xl border-2 border-[#A9D7D3] max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2B2B28]">
            ❓ Dúvidas Frequentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#F9F6ED] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Quantas sessões são necessárias?
              </h3>
              <p>
                A maioria dos casos apresenta melhora significativa em 12-20
                sessões, dependendo da complexidade.
              </p>
            </div>
            <div className="bg-[#F9F6ED] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Você atende online?</h3>
              <p>
                Sim, ofereço sessões presenciais e online com a mesma qualidade de
                atendimento.
              </p>
            </div>
            <div className="bg-[#F9F6ED] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Como é a primeira sessão?
              </h3>
              <p>
                Na avaliação inicial, identificamos seus principais desafios e
                traçamos um plano de ação personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Seção Fale Conosco */}
      <div className="relative z-10 w-full flex justify-center px-4 my-8 pb-16">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Fale Conosco</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Estamos aqui para ajudar! Entre em contato conosco através das nossas
            redes sociais ou WhatsApp.
          </p>

          {/* Formulário de email (apenas se logado) */}
          {isSignedIn && (
            <div className="w-full max-w-md bg-[#F0F7F7] p-8 rounded-lg shadow-2xl mb-12 transition-all duration-300 hover:shadow-3xl border-l-4 border-[#2A5C5A] mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-[#2A5C5A]">
                Envie-nos um Email
              </h2>
              <form
                action="mailto:raphaelalcantaradasilva@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#2A5C5A]"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-[#2A5C5A] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A5C5A]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#2A5C5A]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-[#2A5C5A] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A5C5A]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#2A5C5A]"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-[#2A5C5A] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2A5C5A]"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#2A5C5A]"
                  >
                    Mensagem
                  </label>
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
          <div className="flex justify-center space-x-8">
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
    </div>
  );
}
