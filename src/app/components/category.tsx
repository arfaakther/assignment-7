import Link from "next/link";

interface Icategory{
    id: string,
    nameBn: string,
    slug: string,
    icon: string,
}
const Category = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
    const data:Icategory[] = await res.json();
   return (
        <div className=" border-b border-gray-100 bg-base-100">

        <div className=" container mx-auto flex gap-3">
           
            {
                data.map(item => <Link key={item.id} href={`/${item.slug}`} className="flex gap-1 m-3 p-2 hover:btn rounded-[10px]"><div>{item.icon}</div>
                    <h1>{item.nameBn}</h1>
                </Link>)
            }</div>
        </div>
    );
};

export default Category;