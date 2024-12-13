import BlogGrid from "@/components/blog";
import Cart from "@/components/cart";
import Display from "@/components/displat";
import ProductGrid from "@/components/feature";
import RocketSingleSeater from "@/components/hero";


import ProductGridList from "@/components/product";
import ProductPage from "@/components/productPage";
// import ProductDetails from "@/components/productpageMid";
import ShopPage from "@/components/shop";
import Page from "@/components/shop/page";

import PaginationAndFeatures from "@/components/shopComponent"
import Page2 from "./account/page";

export default function Home() {
  return (
    <div className="">
      {/* one page */}
      <RocketSingleSeater/>
      <ProductGrid/>
      <ProductGridList/>
      <Display/>
      <BlogGrid/>
 <PaginationAndFeatures/>
      
      <ProductPage/>
      <ShopPage/>
      <Page/>
      <Cart/>
      <Page2/>
      {/* <MyAccount/> */}
      {/* <Checkout/> */}
      
      </div>
  );
}
