

const ProductId = async ({ params }) => {
    const { id } = await params;
    
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${id}`);
    const data = await res.json();
    

    const product = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${id}`);
    const productData = await product.json();
    console.log(productData)

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

        <p className="text-gray-500 text-[18px]">
          {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </div>
  </div>
            </div>
            <p className="text-gray-500 text-[17px] pb-5">মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => {
    const unit = item.unit;
    let unitBn:string = unit;

    if (unit === "kg") unitBn = "কেজি";
    if (unit === "litre") unitBn = "লিটার";
    if (unit === "dozen") unitBn = "ডজন";
    if (unit === "piece") unitBn = "পিস";

    return (
      <div
        key={item.id}
        className="card bg-base-100 w-full shadow-sm border border-gray-200"
      >
        <div className="card-body gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl bg-base-300 rounded-2xl p-2">{item.image}</span>

            <div>
              <h2 className="card-title text-xl">
                {item.nameBn}
              </h2>
              <p className="text-gray-500 text-sm">
                প্রতি {unitBn}
              </p>
            </div>
          </div>

          <div className=" flex justify-between mt-3">
            <div><p className="text-gray-500 text-sm mb-1">
              আজকের দাম
            </p>
            <p className="text-2xl font-bold">
              {item.today.toLocaleString("bn-BD")} টাকা
            </p></div>
          

          <div className="flex justify-end pt-3">
            <div className="btn p-2 rounded-2xl text-sm h-6">
              {item.change.dir === "up" ? (
                <span className="text-red-700">
                  ▲ {item.change.pct.toLocaleString("bn-BD")}%
                </span>
              ) : item.change.dir === "down" ? (
                <span className="text-green-700">
                  ▼ {item.change.pct.toLocaleString("bn-BD")}%
                </span>
              ) : (
                <span className="text-gray-500">
                  — {item.change.pct.toLocaleString("bn-BD")}%
                </span>
              )}
            </div>
          </div>
 </div>
        </div>
      </div>
    );
  })}
        </div></div>
    );
};

export default ProductId;