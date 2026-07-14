// ─────────────────────────────────────────────────────────────────
// TURFZY LANDING PAGE – CENTRAL DATA STORE
// All static content lives here so components stay clean and reusable.
// ─────────────────────────────────────────────────────────────────

// ── Navigation ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Find Turf", href: "/find-turf" },
  { label: "Features", href: "#features" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Owners",   href: "#owners" },
  { label: "Contact",  href: "#contact" },
] as const;

// ── Trusted Stats ────────────────────────────────────────────────
export const STATS = [
  { value: 100,  suffix: "+",  label: "Partner Turfs",    prefix: "" },
  { value: 50,   suffix: "K+", label: "Bookings Made",   prefix: "" },
  { value: 15,   suffix: "+",  label: "Cities Covered",  prefix: "" },
  { value: 4.9,  suffix: "★",  label: "Average Rating",  prefix: "" },
] as const;

// ── How It Works ─────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Search Nearby Turfs",
    description:
      "Enter your location or allow GPS access. Instantly see all verified turfs near you with real-time slot availability.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Pick Your Slot",
    description:
      "Browse available time slots in a clean calendar view. See pricing, amenities, and reviews before you commit.",
    icon: "Calendar",
  },
  {
    step: "03",
    title: "Play & Enjoy",
    description:
      "Pay securely via UPI, card, or wallet. Get instant confirmation and show your QR code at the turf. That's it.",
    icon: "Zap",
  },
] as const;

// ── Features ─────────────────────────────────────────────────────
export const FEATURES = [
  {
    id: "nearby-search",
    tag: "Discovery",
    title: "Find Turfs Near You",
    description:
      "Smart GPS-powered search surfaces verified turfs in your area. Filter by sport, price, rating, or time—and get there in minutes.",
    highlights: ["GPS-powered discovery", "Advanced filters", "Interactive map view"],
    icon: "MapPin",
    imageAlign: "right" as const,
  },
  {
    id: "live-availability",
    tag: "Real-Time",
    title: "Live Slot Availability",
    description:
      "Never wonder if a turf is available. See every slot in real time with a live indicator—no phone calls, no guesswork.",
    highlights: ["Live slot updates", "Calendar view", "Instant lock-in on booking"],
    icon: "Clock",
    imageAlign: "left" as const,
  },
  {
    id: "upi-payments",
    tag: "Payments",
    title: "Instant UPI Payments",
    description:
      "Pay in seconds with UPI, Razorpay, or any major wallet. Zero booking fees for customers. Refunds processed automatically.",
    highlights: ["UPI / Card / Wallet", "Zero booking fee", "Auto-refund on cancellation"],
    icon: "CreditCard",
    imageAlign: "right" as const,
  },
  {
    id: "owner-analytics",
    tag: "Owners",
    title: "Powerful Owner Analytics",
    description:
      "Understand your business at a glance. Revenue charts, booking heatmaps, customer retention—everything in one premium dashboard.",
    highlights: ["Revenue charts", "Booking heatmaps", "Customer insights"],
    icon: "BarChart2",
    imageAlign: "left" as const,
  },
] as const;

// ── Why Choose Turfzy ────────────────────────────────────────────
export const WHY_CHOOSE = [
  {
    icon: "Zap",
    title: "Fast Booking",
    description: "Go from search to confirmed booking in under 60 seconds. No friction, no waiting.",
  },
  {
    icon: "ShieldCheck",
    title: "Verified Turfs",
    description: "Every turf on Turfzy is manually verified. Quality and safety are non-negotiable.",
  },
  {
    icon: "Lock",
    title: "Secure Payments",
    description: "Bank-grade encryption on every transaction. Your money and data are always safe.",
  },
  {
    icon: "Activity",
    title: "Live Availability",
    description: "Real-time slot updates so you always book what you see—zero double bookings.",
  },
  {
    icon: "Tag",
    title: "Low Platform Fee",
    description: "Owners keep more of what they earn. One flat monthly fee, no per-booking cuts.",
  },
  {
    icon: "Sparkles",
    title: "Modern Technology",
    description: "Built for 2026—instant confirmations, push notifications, and a buttery-smooth UX.",
  },
] as const;

// ── Testimonials ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Football enthusiast, Mumbai",
    rating: 5,
    text: "Turfzy completely changed how our squad books games. We went from 10 WhatsApp messages to one tap. Absolute game-changer.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Cricket team captain, Pune",
    rating: 5,
    text: "The live slot availability is insane. No more calling turfs and being put on hold. I booked our weekend match in literally 30 seconds.",
    avatar: "PS",
  },
  {
    name: "Ravi Patel",
    role: "Turf owner, Ahmedabad",
    rating: 5,
    text: "As an owner, the analytics dashboard is what sold me. I can see peak hours, revenue trends, and manage bookings all from one place.",
    avatar: "RP",
  },
  {
    name: "Sneha Nair",
    role: "Sports organizer, Bangalore",
    rating: 5,
    text: "Organized a 5-turf tournament using Turfzy. The team handled 50+ bookings effortlessly. The customer support is also phenomenal.",
    avatar: "SN",
  },
  {
    name: "Karan Joshi",
    role: "Badminton player, Hyderabad",
    rating: 5,
    text: "The UPI payment flow is seamlessly fast. Confirmation comes in seconds and the QR code check-in makes entry a breeze.",
    avatar: "KJ",
  },
  {
    name: "Meera Iyer",
    role: "Yoga & sports center owner, Chennai",
    rating: 5,
    text: "Switched from manual WhatsApp bookings to Turfzy. My bookings went up 3× in the first month. The platform fee is extremely fair.",
    avatar: "MI",
  },
] as const;

// ── Pricing ──────────────────────────────────────────────────────
export const PRICING = [
  {
    name: "Player",
    price: "Free",
    description: "For players who want to book instantly.",
    highlight: false,
    cta: "Download App",
    features: [
      "Find turfs near you",
      "Live slot availability",
      "Instant UPI payments",
      "Booking history",
      "Push notifications",
      "Favorite turfs",
    ],
  },
  {
    name: "Turf Owner",
    price: "₹1,499",
    period: "/month",
    description: "Everything you need to run and grow your turf business.",
    highlight: true,
    cta: "Become a Partner",
    badge: "Most Popular",
    features: [
      "Unlimited bookings",
      "Owner analytics dashboard",
      "Revenue & booking reports",
      "Customer management",
      "Promotional tools",
      "Priority support",
      "Custom turf page",
      "Zero per-booking fee",
    ],
  },
] as const;

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQS = [
  {
    question: "Is Turfzy free for players?",
    answer:
      "Yes, completely free. Download the app, find a turf near you, and book instantly with no subscription or hidden charges.",
  },
  {
    question: "How do I list my turf on Turfzy?",
    answer:
      "Sign up as an owner, submit your turf details for verification, and go live in 24–48 hours. Our team handles the onboarding.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support all major UPI apps (GPay, PhonePe, Paytm), credit/debit cards, net banking, and popular wallets via Razorpay.",
  },
  {
    question: "Can I cancel a booking and get a refund?",
    answer:
      "Yes. Cancellations made 2+ hours before the slot are fully refunded within 24 hours. The refund policy is set by the turf owner.",
  },
  {
    question: "How does the owner dashboard work?",
    answer:
      "The owner dashboard gives you real-time visibility into bookings, revenue charts, customer data, and slot management—all in one place.",
  },
  {
    question: "Which cities is Turfzy available in?",
    answer:
      "Turfzy is live in 15+ cities including Mumbai, Pune, Bangalore, Hyderabad, Chennai, Ahmedabad, and more. Expanding rapidly.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use Razorpay's bank-grade encryption and never store your card details. Every transaction is PCI-DSS compliant.",
  },
  {
    question: "Does Turfzy have a mobile app?",
    answer:
      "Yes! Turfzy is available on Android. The iOS app is launching soon. You can also book via this website.",
  },
] as const;

// ── Footer Links ─────────────────────────────────────────────────
export const FOOTER_LINKS = {
  product: [
    { label: "Find Turf",    href: "/find-turf" },
    { label: "Features",     href: "#features" },
    { label: "Pricing",      href: "#pricing" },
    { label: "Download App", href: "#download" },
  ],
  company: [
    { label: "About Us",  href: "/about" },
    { label: "Blog",      href: "/blog" },
    { label: "Careers",   href: "/careers" },
    { label: "Press Kit",  href: "/press" },
  ],
  legal: [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy",    href: "/refund" },
    { label: "Cookie Policy",    href: "/cookies" },
  ],
  support: [
    { label: "Help Center",  href: "/help" },
    { label: "Contact Us",   href: "#contact" },
    { label: "For Owners",   href: "#owners" },
    { label: "Status Page",  href: "/status" },
  ],
} as const;
