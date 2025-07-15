"use client"

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const officeImages = Array.from({ length: 8 }, (_, i) => 
    `/images/consultorio/${i + 1}.jpg`
  );

  // ... (funções openImage, closeImage e navigateImage permanecem as mesmas)

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
        <div className="max-w-4xl text-center">
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
                <h2 className="text-3xl font-bold text-[#2B2B28] mb-4">Quem sou eu</h2>
                <p className="text-lg mb-4">
                  Com mais de 10 anos de experiência clínica, já auxiliei centenas de pacientes 
                  a superarem seus desafios emocionais. Sou especializado em Terapia Cognitivo-Comportamental 
                  e minha abordagem combina:
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
              "Seu problema tem solução - e juntos vamos encontrá-la de forma estruturada 
              e baseada em evidências científicas."
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
            <Link href="/agendamento">
              <button className="px-8 py-3 bg-[#2B2B28] hover:bg-[#A9D7D3] text-[#F9F6ED] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:text-[#2B2B28]">
                Agendar Avaliação Inicial
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Galeria do Consultório (mantida igual) */}
      <div className="relative z-10 bg-[#F9F6ED] py-16 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-xl mx-4 my-12 border-2 border-[#A9D7D3]">
        {/* ... conteúdo igual ao anterior */}
      </div>

      {/* Seção FAQ */}
      <div className="relative z-10 bg-[#B2E3DC] py-16 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-xl mx-4 my-12 border-2 border-[#A9D7D3]">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2B2B28]">
          ❓ Dúvidas Frequentes
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#F9F6ED] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Quantas sessões são necessárias?</h3>
            <p>A maioria dos casos apresenta melhora significativa em 12-20 sessões, dependendo da complexidade.</p>
          </div>
          <div className="bg-[#F9F6ED] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Você atende online?</h3>
            <p>Sim, ofereço sessões presenciais e online com a mesma qualidade de atendimento.</p>
          </div>
          <div className="bg-[#F9F6ED] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Como é a primeira sessão?</h3>
            <p>Na avaliação inicial, identificamos seus principais desafios e traçamos um plano de ação personalizado.</p>
          </div>
        </div>
      </div>

      {/* Modal das Imagens (mantido) */}
    </div>
  );
}