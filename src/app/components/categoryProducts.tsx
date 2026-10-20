"use client";

import { useState } from "react";
import Link from "next/link";

interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
}

const CategoryProducts = ({ data }: { data: IProduct[] }) => {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.today - b.today;
    if (sortOrder === "high-to-low") return b.today - a.today;
    return 0;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <p className="text-gray-500 text-[17px]">
          মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <select
          className="select select-bordered rounded-xl w-full sm:w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">ডিফল্ট সাজানো</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedData.map((item) => {
          const unit = item.unit;
          let unitBn: string = unit;

          if (unit === "kg") unitBn = "কেজি";
          if (unit === "litre") unitBn = "লিটার";
          if (unit === "dozen") unitBn = "ডজন";
          if (unit === "piece") unitBn = "পিস";

          return (
            <Link href={`/items/${item.id}`} key={item.id}>
              <div className="card bg-base-100 w-full shadow-sm border border-gray-200">
                <div className="card-body gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl bg-base-300 rounded-2xl p-2">
                      {item.image}
                    </span>

                    <div>
                      <h2 className="card-title text-xl">
                        {item.nameBn}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        প্রতি {unitBn}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-3">
                    <div>
                      <p className="text-gray-500 text-sm mb-1">
                        আজকের দাম
                      </p>
                      <p className="text-2xl font-bold">
                        {item.today.toLocaleString("bn-BD")} টাকা
                      </p>
                    </div>

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
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CategoryProducts;
