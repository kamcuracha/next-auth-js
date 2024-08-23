import { getAllProducts } from "@/mock/products";
import ProductItem from "@/components/atoms/ProductItem";

const ProductList = () => {
  const products = getAllProducts();
  return (
    <div className="flex flex-col justify-center items-center p-8">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList