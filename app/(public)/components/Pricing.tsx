"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const PRICING_PLANS = [
  {
    name: "Basic",
    price: "₹0",
    period: "/month",
    description: "Perfect for single turf owners just getting started.",
    features: ["1 Turf Listing", "Basic Booking Management", "Standard Support", "Manual Slot Updates", "5% Transaction Fee"],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "Ideal for growing businesses with multiple turfs.",
    features: ["Up to 5 Turf Listings", "Automated Booking System", "Priority Support", "Real-time Availability", "Advanced Analytics", "2% Transaction Fee"],
    highlight: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large sports complexes and franchises.",
    features: ["Unlimited Turf Listings", "Custom App Integration", "24/7 Dedicated Manager", "API Access", "0% Transaction Fee", "Custom Marketing"],
    highlight: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-clash">
            Straightforward pricing. <br/> No hidden fees.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Upgrade or downgrade at any time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-8 relative ${
                plan.highlight
                  ? "bg-gray-900 text-white shadow-2xl scale-105 border-none md:z-10 py-12"
                  : "bg-white text-gray-900 border border-gray-100 shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                  <span className="bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black font-clash">{plan.price}</span>
                <span className={`text-sm font-medium ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>{plan.period}</span>
              </div>

              <button className={`w-full py-3 px-6 rounded-xl font-bold text-sm mb-8 transition-colors ${
                plan.highlight 
                  ? "bg-lime-500 text-white hover:bg-lime-600" 
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}>
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.highlight ? "bg-gray-800" : "bg-lime-50"
                    }`}>
                      <Check size={12} className={plan.highlight ? "text-lime-500" : "text-lime-600"} />
                    </div>
                    <span className={plan.highlight ? "text-gray-300" : "text-gray-700"}>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
