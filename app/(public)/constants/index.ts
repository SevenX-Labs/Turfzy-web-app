// ─────────────────────────────────────────────────────────────────
// TURFZY LANDING PAGE – CENTRAL DATA STORE
// Audited plain-language copy, distinct vocabularies & two-track flows.
// ─────────────────────────────────────────────────────────────────

// ── External Application URLs ──────────────────────────────────
export const APP_URLS = {
  customerWeb: process.env.NEXT_PUBLIC_CUSTOMER_APP_URL || "http://localhost:3001",
  ownerWeb: process.env.NEXT_PUBLIC_OWNER_APP_URL || "http://localhost:3002",
} as const;

// ── Navigation ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Turfzy", href: "#why-turfzy" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
] as const;

// ── How It Works (Equal Depth: Players & Owners) ─────────────────
export const HOW_IT_WORKS = {
  players: [
    {
      step: "01",
      title: "Find Nearby Pitches",
      description:
        "Browse football, box cricket, and multisport turfs near you. Compare clear photos, pitch sizes, and reviews from players who actually played there.",
      icon: "MapPin",
    },
    {
      step: "02",
      title: "Pick Your Date & Time",
      description:
        "Check open time slots on our live venue calendar. Select a 60- or 90-minute slot without having to call or message the turf manager.",
      icon: "Calendar",
    },
    {
      step: "03",
      title: "Pay in Under 60 Seconds",
      description:
        "Confirm your game instantly using Google Pay, PhonePe, Paytm, cards, or net banking. You get an immediate booking confirmation and receipt.",
      icon: "CheckCircle2",
    },
    {
      step: "04",
      title: "Show Your Pass & Play",
      description:
        "Head to the ground, show your digital match pass on your phone at the entrance desk, and start playing right away.",
      icon: "Trophy",
    },
  ],
  owners: [
    {
      step: "01",
      title: "List Your Turf Facility",
      description:
        "Add your ground dimensions, photos, court rules, lighting details, and amenities. Our team reviews the details and puts your page live within 24 to 48 hours.",
      icon: "Store",
    },
    {
      step: "02",
      title: "Set Your Hours & Pricing",
      description:
        "Set custom hourly rates for morning, evening, and weekend slots. You can also block specific hours for pitch grooming or private tournaments.",
      icon: "Calendar",
    },
    {
      step: "03",
      title: "Check In Players on Arrival",
      description:
        "Scan incoming player passes using your phone camera on the Turfzy Owner dashboard to track arrivals and keep court transitions smooth during peak hours.",
      icon: "QrCode",
    },
    {
      step: "04",
      title: "Get Paid Directly to Your Bank",
      description:
        "Earnings are transferred directly into your registered bank account on a predictable weekly schedule, with a clear breakdown of every completed booking.",
      icon: "Wallet",
    },
  ],
} as const;

// ── Why Choose Turfzy (Differentiators & Trust Points) ───────────
export const WHY_CHOOSE = [
  {
    icon: "Zap",
    title: "Fast 60-Second Booking",
    description:
      "Pick your slot and pay right on your phone. No phone calls, no waiting for WhatsApp replies, and no double-booked pitches.",
  },
  {
    icon: "Clock",
    title: "Accurate Slot Schedule",
    description:
      "Our calendars update the second someone books, so you never travel to a ground only to find it already occupied.",
  },
  {
    icon: "ShieldCheck",
    title: "Inspected Pitch Quality",
    description:
      "We check every turf's grass condition, bounce, and evening lighting so you know the ground is in good shape before booking.",
  },
  {
    icon: "ScanLine",
    title: "Contactless Entry Pass",
    description:
      "Your phone holds your match ticket. Show it at the gate for quick entry without signing physical logbooks.",
  },
  {
    icon: "CreditCard",
    title: "All Major Payment Methods",
    description:
      "Pay with any UPI app, debit/credit cards, or net banking. Your card numbers are protected by the same security standards banks use.",
  },
  {
    icon: "RefreshCw",
    title: "Quick Cancellation Payouts",
    description:
      "If your plans change, cancel up to 2 hours before your slot starts. Your full payment is sent back to your original payment method within 24 hours.",
  },
  {
    icon: "Star",
    title: "Player-Tested Reviews",
    description:
      "Read honest feedback on turf conditions, ball bounce, lighting, and parking from fellow local sports enthusiasts.",
  },
  {
    icon: "XCircle",
    title: "No Added Convenience Markups",
    description:
      "What you see on the court price list is what you pay. We don't tack on surprise service fees at checkout.",
  },
] as const;

// ── Platform Capabilities: Grouped by Category ──────────────────
export const FEATURE_CLUSTERS_PLAYER = [
  {
    category: "Finding & Booking Pitches",
    tagline: "Find the right ground for your squad and reserve it in seconds.",
    items: [
      {
        icon: "Search",
        title: "Nearby Turf Finder",
        description: "Search for box cricket, 5-a-side football, and badminton courts within a set distance from you.",
      },
      {
        icon: "Activity",
        title: "Instant Availability Sync",
        description: "Calendars update the moment a slot is taken so you always see true openings.",
      },
      {
        icon: "Filter",
        title: "Smart Court Filters",
        description: "Sort grounds by sport, price per hour, evening floodlights, and court dimensions.",
      },
      {
        icon: "Heart",
        title: "Saved Home Grounds",
        description: "Save your favorite venues to rebook your regular weekend matches with one tap.",
      },
    ],
  },
  {
    category: "Match Day Experience",
    tagline: "Move smoothly from the parking area straight onto the playing surface.",
    items: [
      {
        icon: "QrCode",
        title: "Digital Gate Ticket",
        description: "Display your mobile check-in code at the front desk for quick access without paper slips.",
      },
      {
        icon: "Star",
        title: "Community Ground Ratings",
        description: "Read first-hand reports on grass softness, locker rooms, drinking water, and parking.",
      },
    ],
  },
  {
    category: "Payments & Money Security",
    tagline: "Protected transactions with clear, straightforward refund terms.",
    items: [
      {
        icon: "Lock",
        title: "Bank-Standard Checkout",
        description: "Encrypted payment gateway supporting UPI (GPay, PhonePe, Paytm), cards, and net banking.",
      },
      {
        icon: "Receipt",
        title: "Automatic Money-Back Tracking",
        description: "Track your refund status directly inside the app whenever you cancel an eligible booking.",
      },
    ],
  },
  {
    category: "Match Coordination & Alerts",
    tagline: "Keep your teammates updated and ensure everyone shows up on time.",
    items: [
      {
        icon: "History",
        title: "Past & Upcoming Matches",
        description: "Keep a full record of previous scorelines, dates played, and downloadable payment receipts.",
      },
      {
        icon: "BellRing",
        title: "Kick-Off Reminders",
        description: "Receive helpful WhatsApp and mobile push notifications ahead of your match time.",
      },
    ],
  },
] as const;

export const FEATURE_CLUSTERS_OWNER = [
  {
    category: "Venue & Court Management",
    tagline: "Showcase your grounds, court specifications, and amenities to thousands of local players.",
    items: [
      {
        icon: "Store",
        title: "Custom Facility Profile",
        description: "Display turf photos, pitch dimensions, grass specifications, parking availability, and ground rules.",
      },
      {
        icon: "LayoutGrid",
        title: "Multi-Court Control",
        description: "Manage multiple pitches, cricket nets, or indoor arenas from a single master dashboard.",
      },
      {
        icon: "Wrench",
        title: "Maintenance Scheduling",
        description: "Easily block out specific hours for grass brushing, floodlight maintenance, or private coaching clinics.",
      },
    ],
  },
  {
    category: "Calendar & Pricing Control",
    tagline: "Set flexible hourly rates and keep your courts occupied throughout the week.",
    items: [
      {
        icon: "CalendarDays",
        title: "Interactive Schedule Matrix",
        description: "View booked, open, and reserved slots across days and weeks at a single glance.",
      },
      {
        icon: "TrendingUp",
        title: "Peak & Off-Peak Rates",
        description: "Set separate pricing for weekday mornings, peak evening floodlight hours, and busy weekends.",
      },
    ],
  },
  {
    category: "Payouts & Financial Reporting",
    tagline: "Automated direct bank settlements with clear, transparent accounting.",
    items: [
      {
        icon: "Wallet",
        title: "Direct Bank Settlements",
        description: "Weekly automated payouts sent straight to your registered account with zero hidden deductions.",
      },
      {
        icon: "BarChart3",
        title: "Revenue & Occupancy Insights",
        description: "See your top-earning time slots, repeat customer numbers, and monthly earnings growth.",
      },
      {
        icon: "LayoutDashboard",
        title: "Unified Business Overview",
        description: "Access your dashboard on phone or computer to manage turf operations from anywhere.",
      },
    ],
  },
  {
    category: "Player Operations & Check-In",
    tagline: "Speed up player arrivals and manage customer relationships effortlessly.",
    items: [
      {
        icon: "Scan",
        title: "Phone Check-In Scanner",
        description: "Scan player digital tickets in seconds with your phone camera to prevent unauthorized court usage.",
      },
      {
        icon: "Users",
        title: "Team & Captain Records",
        description: "Keep contact details for regular team captains to invite them for upcoming local tournaments.",
      },
    ],
  },
] as const;

// ── Frequently Asked Questions (Full, Substantive Plain-Language Answers) ──
export const FAQS = [
  {
    question: "Is Turfzy free for players?",
    answer:
      "Yes, Turfzy is completely free for players to use. You can search nearby turfs, compare court amenities, check live open slots, and book your game without paying any platform membership fees or extra booking markups.",
  },
  {
    question: "How do I list my turf on Turfzy?",
    answer:
      "Click 'Become a Partner' or open the Turf Owner portal to register your ground. Enter your facility address, court dimensions, lighting setup, and photos—our ground verification team reviews your listing and activates it for local players within 24 to 48 hours.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support all major payment methods in India, including UPI (Google Pay, PhonePe, Paytm, BHIM), debit and credit cards (Visa, Mastercard, RuPay), net banking across all major banks, and popular digital wallets. All transactions are securely processed with no extra gateway surcharge.",
  },
  {
    question: "Can I cancel a booking and get a refund?",
    answer:
      "Yes. If you cancel your booking at least 2 hours before the match time, you receive an automatic 100% refund. The money is sent directly back to the original UPI ID or bank account you used to pay, usually arriving within 24 hours.",
  },
  {
    question: "How does the owner dashboard work?",
    answer:
      "The Turfzy Owner Dashboard is a simple tool you can open on any smartphone or computer. It lets you customize hourly slot prices, block courts for maintenance, scan player tickets at the gate, and track your weekly revenue payouts with clear earnings charts.",
  },
  {
    question: "Which cities is Turfzy available in?",
    answer:
      "Turfzy is currently live in [CONFIRM: Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Ahmedabad, Delhi-NCR, Kolkata, and 8+ expanding sports hubs]. You can search by your area or pin code in the search bar to find active venues in your neighborhood.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. All payment data is protected with 256-bit encryption using the same security protocols that major banks use. Turfzy never stores your card CVV, PIN, or banking passwords on our systems.",
  },
  {
    question: "Does Turfzy have a mobile app?",
    answer:
      "Yes. Turfzy is available for free download on Android via the Google Play Store, and our iOS app is [CONFIRM: currently in beta / launching soon on the Apple App Store]. You can also book pitches and manage venue slots directly from any mobile or desktop web browser.",
  },
] as const;

// ── Footer Links ─────────────────────────────────────────────────
export const FOOTER_LINKS = {
  product: [
    { label: "Find Turf", href: "/find-turf" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Turfzy", href: "#why-turfzy" },
    { label: "Features", href: "#features" },
    { label: "For Owners", href: "#owners" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press Kit", href: "/press" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "#contact" },
    { label: "Owner Portal", href: "#owners" },
    { label: "Status Page", href: "/status" },
  ],
} as const;
