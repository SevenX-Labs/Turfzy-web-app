"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../constants";

function TestimonialCard({ name, role, text, avatar, rating, delay }: {
  name: string; role: string; text: string; avatar: string; rating: number; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-lg font-bold text-lime-700">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500 font-medium">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        "{text}"
      </p>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FAFAFA] py-24" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-clash">
            What players are saying <br/> about Turfzy.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
