// =============================================================================
// CONSTANTS — Corbett Treat Resort
// Saari hardcoded values yahan centralize ki gayi hain.
// Naye numbers ya links yahan update karo, changes automatically poore app mein
// reflect ho jaayenge.
// =============================================================================

// --- Contact Information ---
export const CONTACT_PHONES = [
  { label: "+91 80570 94258", href: "tel:+918057094258" },
  { label: "+91 98189 22066", href: "tel:+919818922066" },
];

export const WHATSAPP = {
  number: "918057094258",
  presetMessage:
    "Hello Corbett Treat Resort, I would like to inquire about booking/reservations.",
};

export const BOOK_NOW_URL = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.presetMessage)}`;

// --- Address ---
export const RESORT_ADDRESS =
  "Village Dhela, Jim Corbett National Park, Ramnagar, Uttarakhand 244715";

// --- Navigation Links ---
export const NAV_LINKS = [
  { num: "01", label: "Home", href: "#home" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Accommodation", href: "#accommodation" },
  { num: "04", label: "Dining", href: "#dining" },
  { num: "05", label: "Experience", href: "#experience" },
  { num: "06", label: "Wedding", href: "#wedding" },
  { num: "07", label: "Meeting & Event", href: "#meeting" },
  { num: "08", label: "Gallery", href: "#gallery" },
  { num: "09", label: "Blog", href: "#blog" },
  { num: "10", label: "Contact", href: "#contact" },
];

// --- Amenities Data (icon references as strings, resolved in component) ---
export const AMENITIES = [
  {
    id: 1,
    title: "Rooftop Lounge Facilities",
    description:
      "Unwind by the rooftop pool with scenic views, cozy seating and the perfect ambience to relax and recharge.",
    image: "/assets/images/swimming-pool-sunset-view.jpeg",
    iconKey: "umbrella",
  },
  {
    id: 2,
    title: "Picnic Area With BBQ Facilities",
    description:
      "Spacious green lawns, perfect for family picnics and BBQ evenings surrounded by nature's beauty.",
    image: "/assets/images/garden-lawn-exterior-1.jpeg",
    iconKey: "fire",
  },
  {
    id: 3,
    title: "Children's Playground",
    description:
      "Safe and engaging play areas for kids to have fun, explore and create cherished memories.",
    image: "/assets/images/garden-kids-play-area.jpeg",
    iconKey: "child",
  },
  {
    id: 4,
    title: "Live Music Or Cultural Dance",
    description:
      "Enjoy soulful live music and cultural performances that add rhythm and charm to your evenings.",
    image: "/assets/images/cottage-exterior-dusk.jpeg",
    iconKey: "music",
  },
];

// --- Email Address ---
export const CONTACT_EMAIL = "corbetttreatresorts@gmail.com";

// --- Stats Data (Why Choose Us) ---
export const WHY_CHOOSE_US_STATS = [
  { label: "Guests Served", value: "5.0k+" },
  { label: "Team Members", value: "50+" },
  { label: "Rooms & Suites", value: "24+" },
  { label: "Customer Satisfaction", value: "99%" },
];

// --- Gallery Images ---
export const GALLERY_IMAGES = [
  {
    src: "/assets/images/swimming-pool-daytime-view.jpeg",
    alt: "Luxury Swimming Pool Daytime View",
    span: "tall",
  },
  {
    src: "/assets/images/cottage-exterior-dusk.jpeg",
    alt: "Resort Cottages at Dusk",
    span: "wide",
  },
  {
    src: "/assets/images/safari-gypsy-parked.jpeg",
    alt: "Jungle Safari Gypsy Parked",
    span: "normal",
  },
  {
    src: "/assets/images/bedroom-suite-2.jpeg",
    alt: "Premium Bedroom Suite Interior",
    span: "normal",
  },
  {
    src: "/assets/images/restaurant-interior-1.jpeg",
    alt: "Elegant Restaurant Dining",
    span: "wide",
  },
  {
    src: "/assets/images/resort-pathway-hedges.jpeg",
    alt: "Lush Green Resort Pathway",
    span: "normal",
  },
];

// --- Social Links ---
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", platform: "instagram" },
  { label: "Facebook", href: "#", platform: "facebook" },
  { label: "Twitter", href: "#", platform: "twitter" },
];

// --- Brand Info ---
export const BRAND_DESCRIPTION =
  "Experience the untamed beauty of Jim Corbett National Park while enjoying unmatched luxury, warm hospitality, and unforgettable moments.";

// --- Complete Gallery Images with Categories ---
export const ALL_GALLERY_IMAGES = [
  {
    src: "/assets/images/swimming-pool-daytime-view.jpeg",
    alt: "Luxury Swimming Pool Daytime View",
    category: "pool"
  },
  {
    src: "/assets/images/swimming-pool-sunset-view.jpeg",
    alt: "Beautiful Sunset Pool View",
    category: "pool"
  },
  {
    src: "/assets/images/swimming-pool-side-view.jpeg",
    alt: "Relaxing Pool Side View",
    category: "pool"
  },
  {
    src: "/assets/images/swimming-pool-top-view.jpeg",
    alt: "Aerial Swimming Pool View",
    category: "pool"
  },
  {
    src: "/assets/images/swimming-pool-view-1.jpeg",
    alt: "Chrystalline Pool Water View",
    category: "pool"
  },
  {
    src: "/assets/images/swimming-pool-view-2.jpeg",
    alt: "Poolside Lounge Chairs",
    category: "pool"
  },
  {
    src: "/assets/images/bedroom-suite-1.jpeg",
    alt: "Cozy Bedroom Suite Layout",
    category: "rooms"
  },
  {
    src: "/assets/images/bedroom-suite-2.jpeg",
    alt: "Premium Suite King Bed",
    category: "rooms"
  },
  {
    src: "/assets/images/bedroom-suite-3.jpeg",
    alt: "Elegant Room Sitting Area",
    category: "rooms"
  },
  {
    src: "/assets/images/bedroom-suite-4.jpeg",
    alt: "Executive Suite Modern Decor",
    category: "rooms"
  },
  {
    src: "/assets/images/bathroom-interior.jpeg",
    alt: "Luxury Modern Bathroom Amenities",
    category: "rooms"
  },
  {
    src: "/assets/images/cottage-exterior-dusk.jpeg",
    alt: "Resort Cottages At Dusk",
    category: "resort"
  },
  {
    src: "/assets/images/cottage-exterior-1.jpeg",
    alt: "Cottage Front Porch & Garden",
    category: "resort"
  },
  {
    src: "/assets/images/cottage-exterior-2.jpeg",
    alt: "Cottage Garden View Walkway",
    category: "resort"
  },
  {
    src: "/assets/images/cottages-numbered-exterior.jpeg",
    alt: "Premium Family Cottages Outer Look",
    category: "resort"
  },
  {
    src: "/assets/images/duplex-villa-exterior.jpeg",
    alt: "Luxury Duplex Villa Exterior",
    category: "resort"
  },
  {
    src: "/assets/images/main-building-exterior.jpeg",
    alt: "Main Resort Reception Building",
    category: "resort"
  },
  {
    src: "/assets/images/yellow-building-exterior.jpeg",
    alt: "Scenic Resort Building View",
    category: "resort"
  },
  {
    src: "/assets/images/resort-service-building.jpeg",
    alt: "Resort Service Building Front",
    category: "resort"
  },
  {
    src: "/assets/images/garden-lawn-exterior-1.jpeg",
    alt: "Vast Green Garden Lawns",
    category: "nature"
  },
  {
    src: "/assets/images/garden-lawn-exterior-2.jpeg",
    alt: "Beautifully Landscaped Garden Paths",
    category: "nature"
  },
  {
    src: "/assets/images/garden-sitting-area-1.jpeg",
    alt: "Comfy Garden Seating Spot",
    category: "nature"
  },
  {
    src: "/assets/images/garden-kids-play-area.jpeg",
    alt: "Safe Kids Play & Activity Zone",
    category: "nature"
  },
  {
    src: "/assets/images/resort-pathway-hedges.jpeg",
    alt: "Picturesque Hedges Pathway",
    category: "nature"
  },
  {
    src: "/assets/images/pathway-to-reception.jpeg",
    alt: "Stone Walkway to Reception",
    category: "nature"
  },
  {
    src: "/assets/images/resort-flora-flowers.jpeg",
    alt: "Gorgeous In-house Garden Flowers",
    category: "nature"
  },
  {
    src: "/assets/images/mango-tree.jpeg",
    alt: "Majestic Mango Trees in Resort",
    category: "nature"
  },
  {
    src: "/assets/images/restaurant-interior-1.jpeg",
    alt: "Fine Dining Restaurant Hall",
    category: "dining"
  },
  {
    src: "/assets/images/restaurant-interior-2.jpeg",
    alt: "Restaurant Warm Lighting Ambience",
    category: "dining"
  },
  {
    src: "/assets/images/restaurant-dining-table.jpeg",
    alt: "Beautifully Set Dining Table",
    category: "dining"
  },
  {
    src: "/assets/images/safari-gypsy-parked.jpeg",
    alt: "Adventure Safari Gypsy Ready",
    category: "safari"
  },
  {
    src: "/assets/images/safari-gypsy-front.jpeg",
    alt: "Classic Safari Jeep Front Profile",
    category: "safari"
  },
  {
    src: "/assets/images/safari-gypsy-gate.jpeg",
    alt: "Safari Gypsy Entry Gate Point",
    category: "safari"
  },
  {
    src: "/assets/images/indoor-games-room.jpeg",
    alt: "Recreational Indoor Games Room",
    category: "nature"
  },
  {
    src: "/assets/images/sports-lawn-volleyball.jpeg",
    alt: "Spacious Outdoor Volleyball Court",
    category: "nature"
  },
  {
    src: "/assets/images/parking-area-1.jpeg",
    alt: "Spacious Parking Facilities 1",
    category: "resort"
  },
  {
    src: "/assets/images/parking-area-2.jpeg",
    alt: "Spacious Parking Facilities 2",
    category: "resort"
  }
];

