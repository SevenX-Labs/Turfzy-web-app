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


// ── How It Works ─────────────────────────────────────────────────
export const HOW_IT_WORKS = {
  players: [
    { step: "01", title: "Find a Turf", description: "Search for nearby verified turfs.", icon: "MapPin" },
    { step: "02", title: "Choose Date & Time", description: "Pick your preferred slot instantly.", icon: "Calendar" },
    { step: "03", title: "Book Instantly", description: "Confirm your booking with zero wait.", icon: "CheckCircle2" },
    { step: "04", title: "Play & Enjoy", description: "Show up and enjoy your game.", icon: "Trophy" },
  ],
  owners: [
    { step: "01", title: "List Your Turf", description: "Add your turf details and photos.", icon: "Store" },
    { step: "02", title: "Receive Bookings", description: "Get notified as players book slots.", icon: "Bell" },
    { step: "03", title: "Verify QR Check-In", description: "Scan QR codes for seamless entry.", icon: "QrCode" },
    { step: "04", title: "Receive Payments", description: "Get payouts directly to your account.", icon: "Wallet" },
  ]
} as const;

// ── App Features (Customers) ──────────────────────────────────────
export const APP_FEATURES = [
  { icon: "Search", title: "Search Nearby Turfs", description: "Discover venues around you." },
  { icon: "Activity", title: "Live Availability", description: "See open slots instantly." },
  { icon: "Filter", title: "Filters", description: "Sort by sport, price, and distance." },
  { icon: "Heart", title: "Favorites", description: "Save your go-to turfs for quick access." },
  { icon: "History", title: "Booking History", description: "Track all your past and upcoming games." },
  { icon: "Lock", title: "Secure Payments", description: "Safe and seamless checkout." },
  { icon: "QrCode", title: "QR Check-In", description: "Digital access to the pitch." },
  { icon: "BellRing", title: "Notifications", description: "Alerts for bookings and updates." },
  { icon: "Receipt", title: "Refund Tracking", description: "Monitor your refunds easily." },
] as const;

// ── Owner Features ───────────────────────────────────────────────
export const OWNER_FEATURES = [
  { icon: "LayoutGrid", title: "Manage Slots", description: "Easily update and organize availability." },
  { icon: "CalendarDays", title: "Calendar", description: "A comprehensive view of all bookings." },
  { icon: "LayoutDashboard", title: "Booking Dashboard", description: "All your reservations in one place." },
  { icon: "Scan", title: "QR Scanner", description: "Quickly verify player check-ins." },
  { icon: "TrendingUp", title: "Revenue Tracking", description: "Monitor your earnings and growth." },
  { icon: "Wrench", title: "Maintenance Blocks", description: "Block slots for upkeep and repairs." },
  { icon: "Users", title: "Customer Management", description: "Keep track of your loyal players." },
  { icon: "BarChart3", title: "Analytics", description: "Deep insights into your business performance." },
] as const;


// ── Why Choose Turfzy ────────────────────────────────────────────
export const WHY_CHOOSE = [
  { icon: "Zap", title: "Instant Booking", description: "No waiting or calling. Book your slot immediately." },
  { icon: "Clock", title: "Real-Time Slot Availability", description: "Always see exactly what's open." },
  { icon: "ShieldCheck", title: "Secure Payments", description: "Bank-grade encryption on all transactions." },
  { icon: "ScanLine", title: "QR Check-In", description: "Scan and play. Contactless and fast." },
  { icon: "XCircle", title: "Easy Cancellations", description: "Change of plans? Cancel with a tap." },
  { icon: "RefreshCw", title: "Fast Refunds", description: "Get your money back quickly when you cancel." },
  { icon: "Star", title: "Verified Reviews", description: "Read real feedback from fellow players." },
  { icon: "CreditCard", title: "Multiple Payment Options", description: "UPI, Cards, and Wallets accepted." },
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
