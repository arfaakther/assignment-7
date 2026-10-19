

import CategoryProducts from "@/app/components/categoryProducts";
const ProductId = async ({ params }:{params:{id:number}}) => {
    const { id } = await params;
    
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${id}`);
    const data = await res.json();
    

    const product = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${id}`);
    const productData = await product.json();
    

    return (
        <div className="container mx-auto">
            
<div className="card bg-base-100 border rounded-xl border-gray-200 shadow-sm w-full my-7">
  <div className="card-body p-4">
    <div className="flex items-center gap-3">
      <span className="text-3xl rounded-2xl p-2">
        {productData.icon}
      </span>

      <div>
        <h2 className="card-title text-2xl font-bold">
          {productData.nameBn}
        </h2>
</div>
</div>
</div>
  </div>
         
       <CategoryProducts data={data} />
      </div>
    );
};

export default ProductId;