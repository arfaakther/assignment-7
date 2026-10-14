import AllProducts from "./components/allProduct";
import Banner from "./components/banner";
import PriceDown from "./components/priceDown";
import PriceUp from "./components/priceUp";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <PriceUp></PriceUp>
      <PriceDown></PriceDown>
      <AllProducts></AllProducts>
      
    </div>
  );
}
