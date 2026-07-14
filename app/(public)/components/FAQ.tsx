"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../constants";

function FAQItem({ question, answer, isOpen, onToggle, index }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.1)]" : "border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white transition-colors hover:bg-gray-50"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-gray-900 leading-snug">
          {question}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? "bg-lime-500 text-white" : "bg-gray-100 text-gray-500"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white"
          >
            <div className="px-6 pb-6 pt-2">
              <p className="text-gray-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24" id="faq" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky top-32"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-clash leading-tight">
              Frequently <br /> asked questions
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Everything you need to know about Turfzy. Can&apos;t find your answer?{" "}
              <a href="#contact" className="text-gray-900 font-bold underline underline-offset-4 hover:text-lime-600 transition-colors">Talk to us.</a>
            </p>
          </motion.div>

          {/* Accordion */}
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
