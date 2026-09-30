// Offline-safe placeholder image (via.placeholder.com is no longer available).
const img = (emoji, bg) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="200" fill="${bg}"/><text x="150" y="125" font-size="80" text-anchor="middle">${emoji}</text></svg>`
  );

const products = [
  { id: 1, title: "Laptop", price: 50000, category: "Electronics", inStock: true, image: img("💻", "#d6e6ee") },
  { id: 2, title: "T-Shirt", price: 500, category: "Clothing", inStock: false, image: img("👕", "#f3e3d3") },
  { id: 3, title: "Book", price: 300, category: "Books", inStock: true, image: img("📘", "#dfe8d5") },
  { id: 4, title: "Headphones", price: 1200, category: "Electronics", inStock: true, image: img("🎧", "#d6e6ee") },
  { id: 5, title: "Shoes", price: 2200, category: "Clothing", inStock: false, image: img("👟", "#f3e3d3") },
  { id: 6, title: "Notebook", price: 150, category: "Books", inStock: true, image: img("📓", "#dfe8d5") },
];

export default products;
