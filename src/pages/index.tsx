import Layout from "@/layout/layout";
import { Hero } from "@/containers/hero";
import { ProductList } from "@/containers/productList";
import { PreviewProductList } from "@/containers/previewProductList";
import { FullProductList } from "@/containers/fullProductList";
import { ProductCategories } from "@/containers/productCategories";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProductCategories />
      <PreviewProductList />
    </Layout>
  );
}
