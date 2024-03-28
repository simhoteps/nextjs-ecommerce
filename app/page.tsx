import Category from "./components/home/categories/Category";
import Banner from "./components/home/Benner";
import Product from "./components/home/Product";
import ShortBenner from "./components/benner/ShortBenner";

export default function Home() {
  return (
    <div>
      <Category />
      <ShortBenner />
      <Banner />
      <Product />
    </div>
  );
}
