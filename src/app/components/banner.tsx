import Image from "next/image";

const Banner = () => {
   const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

console.log(date);
    return (
        <div className="border border-gray-200 rounded-3xl mx-20 my-5 bg-base-100">
             <div className=" w-full min-h-[400px] rounded-xl overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12 px-4 lg:px-12 lg:py-8">
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <Image className="w-100 h-100" src={'/bazar-hero.svg'} alt={'bazar'} width={100} height={100}></Image>
                                  
                            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
            
                                <div className="mb-3 text-center text-green-600 w-[200px] rounded-[10px] bg-green-100">
                        <div >{ date}</div>
</div>
            
                                <h1 className="text-5xl font-bold leading-tight">আজকের বাজারের দাম এক নজরে
</h1>
            
                    <p className="py-4 lg:py-6 text-[20px]  max-w-xl text-grey-600">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                                </p>
            <a href="#AllProducts" className="inline-block bg-green-600 text-white rounded-[6px] text-s font-bold px-4 py-2 hover:opacity-90 transition">সব পণ্য দেখুন</a>
                            </div>
                        </div>
        </div>
    );
};

export default Banner;