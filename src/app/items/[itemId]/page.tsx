import Link from "next/link";
import {notFound} from "next/navigation";

interface IData{
   id: number,
  slug: string,
  nameBn: string,
  category: string,
  categoryNameBn: string,
  categoryIcon: string,
  unit: string,
  image: string,
  today: number,
  yesterday: number,
  lastWeek: number,
  lastMonth: number,
  change: {
    dir: string,
    pct: number
  },
  markets: 
  {
      id?: number;
    market: string;
    name?: string;
    division: string;
    divisionBn?: string;
    min: number;
    max: number;
    }[];
}
const ItemsDetails = async ({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) => {
  const { itemId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${itemId}`
  );

  const data: IData = await res.json();

  if (!data.markets) {
    notFound();
  }

  const minPrice = Math.min(...data.markets.map((market) => market.min));

  const maxPrice = Math.max(...data.markets.map((market) => market.max));

  const avgPrice = Math.round(
    data.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0
    ) / data.markets.length
  );

  const unit = data.unit;
  let unitBn: string = unit;

  if (unit === "kg") unitBn = "কেজি";
  if (unit === "litre") unitBn = "লিটার";
  if (unit === "dozen") unitBn = "ডজন";
  if (unit === "piece") unitBn = "পিস";

  return (
  <div>
  <div className="flex justify-between bg-white p-6 container mx-auto my-5 border border-gray-200 rounded-2xl">
        <div className="text-5xl flex gap-6 items-center">
          <figure className="bg-base-300 p-5 rounded-2xl ">
                {data.image}</figure>
              <div><h2 className="card-title text-3xl py-1">
          {data.nameBn}
      </h2>
       <p className="text-gray-500 text-[17px] pb-2 ">
          প্রতি {unitBn} · {data.categoryNameBn}
        </p>
        <p className="text-gray-500 text-[17px]">
          গতকালের তুলনায় আজ দাম{" "}
          <strong className="text-gray-600">
            {data.change.dir === "up"
              ? "বেড়েছে"
              : data.change.dir === "down"
              ? "কমেছে"
              : "অপরিবর্তিত"}
          </strong>{" "}
          {data.change.pct.toLocaleString("bn-BD")}%
        </p>
        </div>
    
    </div>
    <div className="bg-base-300 p-5 rounded-2xl ">
      <p className="text-gray-500 text-sm">আজকের দাম</p>
      <div className="">
          <p className="text-4xl font-bold">
            {data.today.toLocaleString("bn-BD")}
          </p>
          <p className="text-gray-500">
            টাকা / {unitBn}
          </p>
      </div>
      <div className="card-actions justify-center">
          <span
            className={`${
              data.change.dir === "up"
                ? " text-red-700"
                : data.change.dir === "down"
                ? " text-green-700"
                : " text-gray-600"
            }`}
          >
            {data.change.dir === "up"
              ? "▲"
              : data.change.dir === "down"
              ? "▼"
              : "—"}{" "}
            {data.change.pct.toLocaleString("bn-BD")}%
          </span>
        </div>
</div>
      </div>
      
      <div className="bg-white p-6 container w-full mx-auto my-5 border border-gray-200 rounded-2xl">
        <h1 className="text-xl font-bold pb-4">দামের সারসংক্ষেপ</h1>
      <div className="grid grid-cols-3 gap-4 justify-between ">
      {/* 1st */}
         <div className=" border border-gray-300 p-5 rounded-2xl ">
      <p className="text-gray-500 text-sm">সর্বনিম্ন দাম</p>
      <div className="">
         
             <h2 className="text-2xl font-bold text-green-700">
        {minPrice.toLocaleString("bn-BD")} টাকা
      </h2>
          
          <p className="text-gray-500">
            সবচেয়ে কম দামের বাজার
          </p>
      </div>
      
        </div>
       {/* 2nd */}
      <div className="border border-gray-300 p-5 rounded-2xl">
         <p className="text-gray-500 text-sm">সর্বাধিক দাম</p>
             <h2 className="text-2xl font-bold text-red-700">
        {maxPrice.toLocaleString("bn-BD")} টাকা
      </h2>
          
          <p className="text-gray-500">
            সবচেয়ে বেশি দামের বাজার
          </p>
      </div>
    {/* 3rd */}
        <div className="border border-gray-300 p-5 rounded-2xl ">
      <p className="text-gray-500 text-sm">গড় দাম
</p>
      <div className="">
         
             <h2 className="text-2xl font-bold text-green-700">
        {minPrice.toLocaleString("bn-BD")} টাকা
      </h2>
          
          <p className="text-gray-500">
            প্রতি {unitBn}-এর হিসাবে
          </p>
      </div>
      
</div>             </div>
    {/* table */}
    
    <h2 className="card-title text-2xl pt-8">বাজারভিত্তিক আজকের দাম</h2>
<div className="card bg-base-100 border border-gray-200 rounded-2xl shadow-sm mt-6 w-full">
  <div className="card-body ">

    <div className="overflow-x-auto">
      <table className="table table-zebra text-[16px]">
        <thead className="text-[17px]">
          <tr>
            <th>বাজার</th>
            <th>বিভাগ</th>
            <th className="text-right">সর্বনিম্ন</th>
            <th className="text-right">সর্বাধিক</th>
            <th className="text-right">গড়</th>
          </tr>
        </thead>

        <tbody>
          {data.markets.map((market, index) => {
            const avg = ((market.min + market.max) / 2).toFixed(2);

            return (
              <tr key={market.id ?? index}>
                <td>{market.market ?? market.name}</td>
                <td>{market.divisionBn ?? market.division}</td>
                <td className="text-right font-semibold">
                  {market.min.toLocaleString("bn-BD")} টাকা
                </td>
                <td className="text-right font-semibold">
                  {market.max.toLocaleString("bn-BD")} টাকা
                </td>
                <td className="text-right font-semibold">
                  {Number(avg).toLocaleString("bn-BD",{
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})} টাকা
   
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
    <Link href={`/categories/${data.category}`} key={data.id} className="btn container w-max mb-15 mx-16 p-5 rounded-xl">
      <span>{data.categoryIcon}</span> সব {data.categoryNameBn}
      </Link>
    </div>
);

};

export default ItemsDetails;