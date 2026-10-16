

import CategoryLinks from "./categoryLinks";

interface Icategory {
  id: string;
  nameBn: string;
  slug: string;
  icon: string;
}

const Category = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );
  const data: Icategory[] = await res.json();

  return <CategoryLinks data={data} />;
};

export default Category;
