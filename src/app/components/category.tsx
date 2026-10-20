
import { Suspense } from "react";
import CategoryLinks from "./categoryLinks";

interface Icategory {
  id: string;
  nameBn: string;
  slug: string;
  icon: string;
}

const Category = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",{
      next: { revalidate: 300 },
    }
  );
  const data: Icategory[] = await res.json();

  return (<Suspense fallback={<div className="h-12" />}>
      <CategoryLinks data={data} />
    </Suspense>);
};

export default Category;
