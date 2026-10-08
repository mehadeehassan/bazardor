const PRIMARY_API =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://api.api-store.workers.dev/api/bazardor";
const BACKUP_API = "https://api.abcz.workers.dev/api/bazardor";

// Prices change once a day, so a few minutes of caching is plenty
const REVALIDATE_SECONDS = 300;

async function request(path) {
  let lastError;

  for (const base of [PRIMARY_API, BACKUP_API]) {
    try {
      const response = await fetch(`${base}${path}`, {
        next: { revalidate: REVALIDATE_SECONDS },
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(`Could not load ${path}: ${lastError?.message}`);
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

/** Returns undefined when no product has this slug */
export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

/** Returns undefined when no category has this slug */
export async function getCategoryBySlug(slug) {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug);
}
