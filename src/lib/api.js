const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://openapi.programming-hero.com/api/bazardor";


const REVALIDATE_SECONDS = 300;

async function request(path) {
  const response = await fetch(`${API_BASE}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`Could not load ${path}: ${response.status}`);
  }
  return response.json();
}

export function getCategories() {
  return request("/categories");
}

export function getProducts(categorySlug) {
  const query = categorySlug
    ? `?category=${encodeURIComponent(categorySlug)}`
    : "";
  return request(`/products${query}`);
}


export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}


export async function getCategoryBySlug(slug) {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug);
}