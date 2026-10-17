
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


interface Icategory {
  id: string;
  nameBn: string;
  slug: string;
  icon: string;
}

const CategoryLinks = ({ data }: { data: Icategory[] }) => {
  const userPath = usePathname();
  
return (
    <div className="border-b border-gray-100 bg-base-100">
      <div className="container mx-auto flex gap-3 overflow-x-auto">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/categories/${item.slug}`}
            className={`flex shrink-0 items-center gap-1 m-3 p-2 rounded-[10px] ${
              userPath === `/categories/${item.slug}`
                ? "bg-green-700 text-white"
                : "hover:bg-base-200"
            }`}
          >
            <div>{item.icon}</div>
            <h1>{item.nameBn}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;
