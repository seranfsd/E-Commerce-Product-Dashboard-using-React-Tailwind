import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="py-16 text-center text-sea">No products match these filters. Try another category.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          inStock={product.inStock}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
