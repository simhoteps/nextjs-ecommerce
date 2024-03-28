import Heading from "../general/Heading";
import ProductCard from "./ProductCard";
import { products } from "@/utils/Products";
import WarningText from "./Warning";

const Products = () => {
  if (products.length == 0) {
    return <WarningText text="Ürün Bulunmamakta" />;
  }
  return (
    <div>
      <Heading text="Tüm Ürünler" />
      <div className="flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
