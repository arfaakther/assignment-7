'use client'

import Image from "next/image";


const Header = () => {
    return (
 <div className=" border border-gray-100">     
<div className="flex flex-col container mx-auto sm:flex-row sm:justify-between sm:items-center gap-4 p-8">

  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-green-700 rounded-[10px] flex items-center justify-center shrink-0">
      <Image
        src="/logo-icon.png"
        width={20}
        height={20}
        alt="Logo"
        className="brightness-0"
      />
    </div>

    <div>
      <h1 className="text-2xl font-bold">বাজার দর</h1>

      <div className="text-gray-600">
        {new Date().toLocaleDateString("bn-BD", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <button className="btn text-[16px] hover:bg-grey-300 rounded-[8px]">সাইন ইন</button>
    <button className="btn bg-green-700 text-[16px] text-white rounded-[8px] hover:bg-green-800">সাইন আপ</button>
  </div>
</div>
</div>


    );
};

export default Header;