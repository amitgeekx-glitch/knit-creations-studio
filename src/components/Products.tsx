import { useCart } from "@/context/CartContext";

const Products = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
          <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
          <p className="mb-2">₹{product.price}</p>
          <button
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.image
            })}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;