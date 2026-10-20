"use client"
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from 'react-hot-toast';
import React from "react";

const ProfilePage = () => {
    const {data: session}= authClient.useSession()
    const user = session?.user;

        const handleSignOut=async()=>{
        await authClient.signOut();
          toast.success("সফলভাবে সাইন আউট হয়েছে!");
           window.location.href = "/";
}
const handleProfileUpdate = async(e:React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault()
     const formData = new FormData(e.target)
        const newName = Object.fromEntries(formData.entries()) as {name:string}
        await authClient.updateUser({
            ...newName
        })
     toast.success("প্রোফাইল আপডেট সফল হয়েছে।");
}

    return (
       
        <div className="container mx-auto px-4 py-8">
  <div className="mx-auto max-w-3xl space-y-6">
          <div><h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
          <p className="text-[16px] text-gray-500 break-all">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>  
</div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-base-200 border border-base-300 p-5 sm:p-6 rounded-2xl">

      <div className="flex items-center gap-4 min-w-0">
        <img
          alt="profile"
          src={user?.image as string}
          className="w-16 h-16 border rounded-[15px] object-cover shrink-0 border border-base-300"
        />

        <div className="min-w-0">
          <h1 className="text-lg font-bold">
            {user?.name as string}
          </h1>
          <p className="text-sm text-gray-500 break-all">
            {user?.email as string}
          </p>
        </div>
      </div>

      <button
        onClick={handleSignOut}
        className="btn btn-outline border-red-700 text-red-700 hover:bg-red-700 hover:text-white rounded-xl shrink-0"
      >
        ↩ সাইন আউট
      </button>
    </div>

 
    <form onSubmit={handleProfileUpdate}>
      <fieldset className="fieldset bg-base-200 border border-base-300 p-5 sm:p-6 rounded-2xl w-full">

        <h1 className="font-bold text-lg">
          তথ্য
        </h1>

        <label className="label text-base-content text-base py-2">
          নাম
        </label>

        <input
          name="name"
          type="text"
          className="input input-bordered w-full rounded-xl"
          
        />

        <button
          type="submit"
          className="btn bg-green-700 hover:bg-green-800 text-white mt-4 w-full rounded-xl"
        >
          আপডেট করুন
        </button>

      </fieldset>
    </form>

  </div>
</div>

    );
};

export default ProfilePage;