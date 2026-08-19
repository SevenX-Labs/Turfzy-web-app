import React from "react";

export interface SportIconProps {
  size?: number | string;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

/**
 * TurfPitchIcon — Detailed vector of an inspected turf pitch / football ground
 */
export function TurfPitchIcon({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
}: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer Pitch Boundary */}
      <rect x="3" y="2.5" width="18" height="19" rx="2.5" />
      {/* Center Line & Center Circle */}
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth={strokeWidth * 0.9} />
      <circle cx="12" cy="12" r="3.5" strokeWidth={strokeWidth * 0.9} />
      <circle cx="12" cy="12" r="0.8" fill={color} />
      {/* Top Penalty Box */}
      <path d="M7.5 2.5v3.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2.5" strokeWidth={strokeWidth * 0.85} />
      {/* Bottom Penalty Box */}
      <path d="M7.5 21.5V18a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5" strokeWidth={strokeWidth * 0.85} />
    </svg>
  );
}

/**
 * CricketSportIcon — Detailed vector of cricket pitch, bat, ball & stumps
 */
export function CricketSportIcon({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
}: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Cricket Stumps & Bails */}
      <line x1="14.5" y1="8" x2="14.5" y2="21" strokeWidth={strokeWidth * 0.85} />
      <line x1="18" y1="8" x2="18" y2="21" strokeWidth={strokeWidth * 0.85} />
      <line x1="21.5" y1="8" x2="21.5" y2="21" strokeWidth={strokeWidth * 0.85} />
      <line x1="13.5" y1="8" x2="22.5" y2="8" strokeWidth={strokeWidth * 1.2} />

      {/* Cricket Bat */}
      <line x1="3" y1="21" x2="8.5" y2="15.5" strokeWidth={strokeWidth * 1.2} />
      <path
        d="M7.5 16.5 11 13a1.5 1.5 0 0 1 2.1 0l1.4 1.4a1.5 1.5 0 0 1 0 2.1l-3.5 3.5-3.5-3.5z"
        fill="currentColor"
        fillOpacity="0.18"
        strokeWidth={strokeWidth * 0.85}
      />

      {/* Cricket Ball with Seam */}
      <circle cx="6" cy="6.5" r="3.5" strokeWidth={strokeWidth * 0.9} />
      <path d="M4 5.2c1.2 1.5 2.8 1.5 4 0" strokeWidth={strokeWidth * 0.6} />
    </svg>
  );
}

/**
 * FootballSportIcon — Precision geometric soccer / football ball
 */
export function FootballSportIcon({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
}: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9.5" />
      <polygon
        points="12 7.5 15.2 9.8 14 13.8 10 13.8 8.8 9.8"
        fill="currentColor"
        fillOpacity="0.22"
        strokeWidth={strokeWidth * 0.8}
      />
      <line x1="12" y1="7.5" x2="12" y2="2.5" strokeWidth={strokeWidth * 0.8} />
      <line x1="15.2" y1="9.8" x2="20.5" y2="7.5" strokeWidth={strokeWidth * 0.8} />
      <line x1="14" y1="13.8" x2="18.5" y2="18.5" strokeWidth={strokeWidth * 0.8} />
      <line x1="10" y1="13.8" x2="5.5" y2="18.5" strokeWidth={strokeWidth * 0.8} />
      <line x1="8.8" y1="9.8" x2="3.5" y2="7.5" strokeWidth={strokeWidth * 0.8} />
    </svg>
  );
}

/**
 * TennisSportIcon — Tennis / Pickleball court racket & ball
 */
export function TennisSportIcon({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
}: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <ellipse
        cx="14.5"
        cy="9.5"
        rx="5.5"
        ry="6.5"
        transform="rotate(35 14.5 9.5)"
        strokeWidth={strokeWidth}
      />
      <line x1="9.8" y1="14.2" x2="3.5" y2="20.5" strokeWidth={strokeWidth * 1.3} />
      <line x1="2.5" y1="19.5" x2="4.5" y2="21.5" strokeWidth={strokeWidth * 1.5} />
      {/* Tennis Ball */}
      <circle cx="6" cy="6.5" r="3.2" strokeWidth={strokeWidth * 0.9} />
      <path d="M4.2 5.5c1 1.2 2.6 1.2 3.6 0" strokeWidth={strokeWidth * 0.6} />
    </svg>
  );
}

/**
 * BadmintonSportIcon — Shuttlecock & racket
 */
export function BadmintonSportIcon({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
}: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Racquet head & shaft */}
      <circle cx="15.5" cy="8.5" r="5.5" strokeWidth={strokeWidth} />
      <line x1="11.5" y1="12.5" x2="3.5" y2="20.5" strokeWidth={strokeWidth * 1.2} />
      {/* Shuttlecock cork & feathers */}
      <circle cx="6.5" cy="6.5" r="2" fill="currentColor" fillOpacity="0.25" strokeWidth={strokeWidth * 0.8} />
      <path d="M8 8 11.5 5 10 11.5z" fill="currentColor" fillOpacity="0.15" strokeWidth={strokeWidth * 0.7} />
    </svg>
  );
}

/**
 * StadiumFloodlightsIcon — Stadium ground floodlight tower / arena illumination
 */
export function StadiumFloodlightsIcon({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
}: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="9" x2="12" y2="21.5" strokeWidth={strokeWidth * 1.1} />
      <line x1="7.5" y1="21.5" x2="16.5" y2="21.5" strokeWidth={strokeWidth} />
      <rect
        x="4"
        y="3"
        width="16"
        height="6"
        rx="2"
        fill="currentColor"
        fillOpacity="0.15"
        strokeWidth={strokeWidth}
      />
      <circle cx="7" cy="6" r="1.2" fill={color} />
      <circle cx="12" cy="6" r="1.2" fill={color} />
      <circle cx="17" cy="6" r="1.2" fill={color} />
      {/* Light Rays */}
      <line x1="4.5" y1="11" x2="2.5" y2="14" strokeWidth={strokeWidth * 0.7} strokeDasharray="1.5 1.5" />
      <line x1="12" y1="11" x2="12" y2="15" strokeWidth={strokeWidth * 0.7} strokeDasharray="1.5 1.5" />
      <line x1="19.5" y1="11" x2="21.5" y2="14" strokeWidth={strokeWidth * 0.7} strokeDasharray="1.5 1.5" />
    </svg>
  );
}

/**
 * BasketballCourtIcon — Basketball arena hoop & ball
 */
export function BasketballCourtIcon({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
}: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Backboard */}
      <line x1="3.5" y1="4" x2="20.5" y2="4" strokeWidth={strokeWidth * 1.3} />
      <rect x="7.5" y="4" width="9" height="5" strokeWidth={strokeWidth * 0.8} />
      {/* Rim */}
      <ellipse cx="12" cy="11.5" rx="4.5" ry="1.8" strokeWidth={strokeWidth * 1.1} />
      {/* Net */}
      <path d="M8.5 12 10 17.5h4L15.5 12" strokeWidth={strokeWidth * 0.8} />
      <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" strokeWidth={strokeWidth * 0.7} />
      {/* Ball */}
      <circle cx="18" cy="17.5" r="3.2" strokeWidth={strokeWidth * 0.85} />
      <line x1="18" y1="14.3" x2="18" y2="20.7" strokeWidth={strokeWidth * 0.6} />
      <line x1="14.8" y1="17.5" x2="21.2" y2="17.5" strokeWidth={strokeWidth * 0.6} />
    </svg>
  );
}
