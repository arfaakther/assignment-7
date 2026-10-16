import Link from "next/link";
const SignInPage = () => {
    return (
        <div>
            <div className="grid justify-center text-center mt-8">
            <h1 className="text-black text-3xl font-bold py-2">সাইন ইন</h1>
            <p className="text-grey-400">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p></div>
        <div className="flex justify-center mt-5">

            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 px-8 rounded-2xl border border-grey-300 w-md border">


 
  <label className="label text-black text-xl py-2">ইমেইল</label>
  <input type="email" className="input text-[16px] w-full rounded-xl" placeholder="you@example.com" />
  <label className="label text-black text-xl py-2">পাসওয়ার্ড</label>
  <input type="password" className="input text-[16px] w-full rounded-xl" placeholder="কমপক্ষে ৮ অক্ষর" />
  
                    


  <button className="btn bg-green-700 text-white my-4 w-full rounded-xl ">সাইন ইন</button>
<div className="flex items-center gap-3 my-4">
  <hr className="flex-1 border-gray-300" />
  <span className="text-[16px]">অথবা</span>
  <hr className="flex-1 border-gray-300" />
                        </div>
                        <div className="flex justify-between">
                            <button className="btn border border-black rounded-[10px] text-[16px] px-11 py-6"><span></span> Google দিয়ে<br/>চালিয়ে যান</button>
                            <button className="btn border border-black rounded-[10px] text-[16px] px-11 py-6"><span></span> GitHub দিয়ে<br/>চালিয়ে যান</button>
                        </div>
                        <h1 className="text-center text-[16px] my-5">অ্যাকাউন্ট নেই? <Link href={'/signup'} className="text-green-700 underline"> সাইন আপ করুন </Link></h1>
</fieldset>
            </form>
        </div>
            <h1 className="text-center text-[16px] my-5"><Link href={'/'} className="text-grey-400 underline"> ← হোম পেজে ফিরে যান </Link></h1>
        
        </div>
    );
};

export default SignInPage;