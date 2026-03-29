/**
 * Tiendanube API Integration
 *
 * SINGLE SOURCE OF TRUTH para los datos de productos.
 * Shop.jsx y /tienda importan de aquí.
 *
 * Cuando las env vars están configuradas, consulta la API real con ISR (1h).
 * Sin env vars, retorna datos mock para desarrollo local.
 *
 * API Docs: https://tiendanube.github.io/api-documentation/
 *
 * Variables de entorno requeridas:
 *   TIENDANUBE_STORE_ID     - ID de la tienda (user_id del OAuth)
 *   TIENDANUBE_ACCESS_TOKEN - Token de acceso OAuth2 (no expira)
 *   TIENDANUBE_STORE_URL    - URL pública de la tienda (ej: https://kimcedeno.mitiendanube.com)
 */

const STORE_ID = process.env.TIENDANUBE_STORE_ID;
const ACCESS_TOKEN = process.env.TIENDANUBE_ACCESS_TOKEN;
const STORE_URL = process.env.TIENDANUBE_STORE_URL || '';
const API_BASE = `https://api.tiendanube.com/v1/${STORE_ID}`;

const isApiConfigured = Boolean(STORE_ID && ACCESS_TOKEN);

const headers = {
  'Authentication': `bearer ${ACCESS_TOKEN}`,
  'User-Agent': 'ProyectoKim (hola@kimcedeno.com)',
  'Content-Type': 'application/json',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

function mapProduct(raw) {
  const variant = raw.variants?.[0];
  const price = variant ? parseFloat(variant.price) : 0;
  const promoPrice = variant?.promotional_price
    ? parseFloat(variant.promotional_price)
    : null;
  const image = raw.images?.[0]?.src || null;
  const handle = raw.handle?.es || raw.handle?.en || '';

  return {
    id: raw.id,
    name: raw.name?.es || raw.name?.en || '',
    description: stripHtml(raw.description?.es || raw.description?.en || ''),
    price,
    promoPrice: promoPrice && promoPrice < price ? promoPrice : null,
    currency: 'ARS',
    image,
    categoryIds: (raw.categories || []).map((c) => c.id),
    tiendanubeUrl: handle ? `${STORE_URL}/productos/${handle}` : STORE_URL,
  };
}

function mapCategory(raw) {
  return {
    id: raw.id,
    label: raw.name?.es || raw.name?.en || '',
    handle: raw.handle?.es || raw.handle?.en || '',
  };
}

// ---------------------------------------------------------------------------
// Mock data (fallback sin credenciales)
// ---------------------------------------------------------------------------

const mockProducts = [
  {
    id: 1,
    name: "Velas Rituales Artesanales",
    description: "Set de 3 velas de soja con esencias naturales para rituales de intención. Lavanda, sándalo y romero.",
    price: 12500,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/velas.jpg",
    categoryIds: [],
    category: "velas",
    badge: "Popular",
    featured: true,
    tiendanubeUrl: "#",
  },
  {
    id: 2,
    name: "Cuarzo Rosa Premium",
    description: "Cristal natural de cuarzo rosa para conexión emocional, sanación y apertura del chakra corazón.",
    price: 8900,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/cuarzo.jpg",
    categoryIds: [],
    category: "cristales",
    badge: "Nuevo",
    featured: true,
    tiendanubeUrl: "#",
  },
  {
    id: 3,
    name: "Kit Incienso Sagrado",
    description: "Selección artesanal de 12 inciensos para limpieza energética. Palo santo, salvia y mirra.",
    price: 6500,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/incienso.jpg",
    categoryIds: [],
    category: "incienso",
    badge: null,
    featured: false,
    tiendanubeUrl: "#",
  },
  {
    id: 4,
    name: "Set Cristales de Protección",
    description: "Obsidiana, turmalina negra y amatista para protección energética. Incluye bolsa de terciopelo.",
    price: 15800,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/cristales-set.jpg",
    categoryIds: [],
    category: "cristales",
    badge: "Exclusivo",
    featured: true,
    tiendanubeUrl: "#",
  },
  {
    id: 5,
    name: "Vela de Intención - Abundancia",
    description: "Vela de soja artesanal con canela y clavo de olor. Ritual de prosperidad incluido.",
    price: 4500,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/vela-abundancia.jpg",
    categoryIds: [],
    category: "velas",
    badge: null,
    featured: false,
    tiendanubeUrl: "#",
  },
  {
    id: 6,
    name: "Amatista Drusa Natural",
    description: "Drusa de amatista natural para meditación y elevación espiritual. Pieza única seleccionada.",
    price: 22000,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/amatista.jpg",
    categoryIds: [],
    category: "cristales",
    badge: "Premium",
    featured: false,
    tiendanubeUrl: "#",
  },
  {
    id: 7,
    name: "Incienso Palo Santo Premium",
    description: "Pack de 6 palitos de palo santo certificado. Ideal para limpieza de espacios y meditación.",
    price: 5200,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/palo-santo.jpg",
    categoryIds: [],
    category: "incienso",
    badge: null,
    featured: false,
    tiendanubeUrl: "#",
  },
  {
    id: 8,
    name: "Vela 7 Chakras",
    description: "Set de 7 velas artesanales, una por cada chakra. Con guía de meditación incluida.",
    price: 18500,
    promoPrice: null,
    currency: "ARS",
    image: "/productos/vela-chakras.jpg",
    categoryIds: [],
    category: "velas",
    badge: "Nuevo",
    featured: true,
    tiendanubeUrl: "#",
  },
];

const mockCategories = [
  { id: 'velas', label: 'Velas', handle: 'velas' },
  { id: 'cristales', label: 'Cristales', handle: 'cristales' },
  { id: 'incienso', label: 'Incienso', handle: 'incienso' },
];

// ---------------------------------------------------------------------------
// API calls
// ---------------------------------------------------------------------------

export async function getProducts() {
  if (!isApiConfigured) return mockProducts;

  const res = await fetch(`${API_BASE}/products?per_page=200&published=true`, {
    headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error(`Tiendanube API error ${res.status}: ${await res.text()}`);
    return mockProducts;
  }

  const raw = await res.json();
  return raw.map(mapProduct);
}

export async function getCategories() {
  if (!isApiConfigured) return mockCategories;

  const res = await fetch(`${API_BASE}/categories`, {
    headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error(`Tiendanube categories error ${res.status}`);
    return mockCategories;
  }

  const raw = await res.json();
  return raw.map(mapCategory);
}

export async function getProductsByCategory(categoryId) {
  const products = await getProducts();
  if (categoryId === 'todos') return products;

  return products.filter((p) =>
    p.categoryIds.includes(categoryId) || p.category === categoryId
  );
}

export async function getFeaturedProducts() {
  const products = await getProducts();
  // Con API real: retorna los primeros 4 (Tiendanube no tiene campo "featured")
  // Con mocks: filtra por p.featured
  if (isApiConfigured) return products.slice(0, 4);
  return products.filter((p) => p.featured);
}

// ---------------------------------------------------------------------------
// Formateo
// ---------------------------------------------------------------------------

export function formatPrice(price) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
}
