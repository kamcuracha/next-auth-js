import Link from "next/link";

const ProductItem = ({product}) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="text-2xl">
        <p>{product.image} - {product.name}</p>
      </div>
    </Link>
  )
}

export default ProductItem