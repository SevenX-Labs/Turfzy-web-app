"use client";

import React from "react";
import Link from "next/link";
import { X, Globe, ExternalLink, Play } from "lucide-react";
import { FOOTER_LINKS } from "../constants";

const SOCIAL_LINKS = [
  { icon: X,            href: "https://twitter.com/turfzy",            label: "X (Twitter)" },
  { icon: Globe,        href: "https://instagram.com/turfzy",          label: "Instagram"   },
  { icon: ExternalLink, href: "https://linkedin.com/company/turfzy",   label: "LinkedIn"    },
  { icon: Play,         href: "https://youtube.com/@turfzy",           label: "YouTube"     },
] as const;

const COLUMNS = [
  { heading: "Product",  links: FOOTER_LINKS.product  },
  { heading: "Company",  links: FOOTER_LINKS.company  },
  { heading: "Legal",    links: FOOTER_LINKS.legal    },
  { heading: "Support",  links: FOOTER_LINKS.support  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-clash text-2xl font-bold text-gray-900 block mb-6">
              Turf<span className="text-lime-500">zy</span>
            </Link>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-xs">
              Discover, book, and play at sports turfs near you. Built for players and owners alike.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-lime-50 hover:text-lime-600 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-gray-900 font-bold mb-6 text-sm tracking-wide">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {year} Turfzy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
