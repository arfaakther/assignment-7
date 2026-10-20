"use client"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from 'react-hot-toast';

const UserInfo = () => {
    const {data: session}= authClient.useSession()
    const user = session?.user;
    

    const handleSignOut=async()=>{
        await authClient.signOut();
         toast.success("সফলভাবে সাইন আউট হয়েছে!");
      
}
    
    return (
        <div>
            {
                user ? <div className="flex text-center">

                    
                    <div className="dropdown dropdown-bottom dropdown-end">
                                          

                        <div tabIndex={0} role="button" className="btn m-1">
                              
                                  <div className="avatar">
                                    <div className="w-8 m-1 rounded-[8px] border">
    <img alt="profile" src={user?.image as string} />
  </div>
</div>
    <h1>{user?.name as string} ▾</h1>
</div>
                        
  <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li className="text-[18px]"><Link href={'/profile'}><span>👤</span>আমার প্রোফাইল</Link></li>
    <li>   <button onClick={handleSignOut} className=" text-red-700 text-[18px]">↩ সাইন আউট</button>
</li>
  </ul>
</div>
                 

                </div>:<div className="flex items-center gap-3">
    <Link href={'/signin'} className="btn text-[16px] hover:bg-grey-300 rounded-[8px]">সাইন ইন</Link>
    <Link href={'/signup'} className="btn bg-green-700 text-[16px] text-white rounded-[8px] hover:bg-green-800">সাইন আপ</Link>
  </div>
            }
            
        </div>
    );
};

export default UserInfo;