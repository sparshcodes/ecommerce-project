const API_BASE = "https://dummyjson.com";

export async function getAllProducts() {
  const response = await fetch(`${API_BASE}/products?limit=100`);
  const json = await response.json();
  return json.products;
}

export async function getProductById(productId) {;
  const response = await fetch(`${API_BASE}/products/${productId}`);
  const json = await response.json();
  return json;
}