"use client"

import { motion } from "framer-motion";

export default function Biblioteca() {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900 min-h-screen relative">
      {/* Background com imagem e overlay */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/raphapsi.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#FFFFFF]/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Aviso sobre produtos digitais */}
        <motion.div 
          className="bg-[#B2E3DC] rounded-xl p-6 shadow-lg border-2 border-[#A9D7D3] mb-8"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-bold mb-2 text-[#2A5C5A] text-center">
            Em Breve: Produtos Digitais de Psicologia
          </h2>
          <p className="text-gray-700 text-center">
            Nossa biblioteca em breve terá e-books, cursos e materiais exclusivos sobre Terapia Cognitivo-Comportamental e bem-estar mental.
          </p>
        </motion.div>

        <h1 className="text-5xl font-extrabold text-center text-purple-600 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg mb-12 font-roboto">
          Biblioteca Digital
        </h1>
      </div>
    </section>
  );
}