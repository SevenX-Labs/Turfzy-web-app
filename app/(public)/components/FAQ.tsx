"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import { FAQS } from "../constants";

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle, 
  index 
}: {
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${
        isOpen 
          ? "border-lime-300 shadow-[0_8px_30px_rgba(89,166,8,0.1)] ring-4 ring-lime-50" 
          : "border-gray-100 hover:border-lime-200 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 p-6 text-left bg-transparent z-10 relative"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold leading-snug transition-colors duration-300 ${
          isOpen ? "text-lime-700" : "text-gray-900 group-hover:text-lime-600"
        }`}>
          {question}
        </span>
        
        {/* Animated Plus/Cross Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen 
              ? "bg-lime-500 text-white shadow-inner" 
              : "bg-gray-50 text-gray-400 group-hover:bg-lime-100 group-hover:text-lime-600"
          }`}
        >
          <Plus size={20} strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 relative z-10">
              <motion.p 
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 leading-relaxed font-medium"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Subtle active background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-lime-50/50 transition-opacity duration-500 pointer-events-none ${isOpen ? "opacity-100" : "opacity-0"}`} />
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Staggered animation for the left header column
  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="relative bg-[#FAFAFA] py-24 md:py-32 overflow-hidden" id="faq">
      
      {/* Ambient Background Blur */}
      <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <MessageCircleQuestion className="text-lime-500 w-4 h-4" />
              <span className="text-sm font-bold text-gray-700 tracking-wide">
                Got Questions?
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-clash tracking-tight leading-[1.1]"
            >
              Frequently <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">
                asked questions
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-md font-medium">
              Everything you need to know about Turfzy. Can&apos;t find your answer?{" "}
              <a 
                href="#contact" 
                className="text-gray-900 font-bold underline decoration-2 decoration-lime-500/30 underline-offset-4 hover:decoration-lime-500 hover:text-lime-600 transition-all duration-300"
              >
                Talk to us.
              </a>
            </motion.p>
          </motion.div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}