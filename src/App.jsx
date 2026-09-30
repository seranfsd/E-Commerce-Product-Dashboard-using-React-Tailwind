import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import products from "./data/products";

const categories = ["All", ...new Set(products.map((p) => p.category))];

function App() {
  const [category, setCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const visible = products.filter(
    (p) => (category === "All" || p.category === category) && (!inStockOnly || p.inStock)
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        categories={categories}
        category={category}
        onCategoryChange={setCategory}
        inStockOnly={inStockOnly}
        onStockChange={setInStockOnly}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <p className="mb-4 text-sm text-sea">{visible.length} products</p>
        <ProductList products={visible} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
