
import Image from "next/image";
import Link from "next/link";
import UserInfo from "./userInfo";
import DateDisplay from "./date";



const Header = () => {
  

    return (
 <div className=" border-b border-gray-100 bg-base-100"> 
   
<div className="flex flex-col container mx-auto sm:flex-row sm:justify-between sm:items-center gap-4 p-4">

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

    <Link href="/">
      <h1 className="text-2xl font-bold">বাজার দর</h1>
<div className="text-gray-600">
         <DateDisplay />
      </div>
    </Link>
  </div>
<UserInfo></UserInfo>
  
</div>
</div>


    );
};

export default Header;