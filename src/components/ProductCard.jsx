const PREMIUM_THRESHOLD = 1000;

function ProductCard({ title, price, category, inStock, image }) {
  const isPremium = price > PREMIUM_THRESHOLD;

  return (
    <article
      className={`overflow-hidden rounded-xl bg-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
        isPremium ? "ring-2 ring-amber" : ""
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={`h-44 w-full object-cover ${inStock ? "" : "opacity-50 grayscale"}`}
        />
        {isPremium && (
          <span className="absolute left-3 top-3 rounded-full bg-amber px-3 py-1 text-xs font-semibold text-ink">
            Premium
          </span>
        )}
      </div>

      <div className="space-y-2 p-4">
        <p className="text-sm text-sea">{category}</p>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center justify-between">
          <span className="text-xl font-extrabold">₹{price.toLocaleString("en-IN")}</span>
          {inStock ? (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
              In Stock ✅
            </span>
          ) : (
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
              Sold Out ❌
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
