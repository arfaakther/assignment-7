import Link from "next/link";

const NotFound = () => {
    return (
         <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        <h1 className="text-8xl sm:text-9xl font-extrabold text-green-700">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold mt-4">
          পৃষ্ঠা খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="text-gray-500 mt-3 leading-7">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
          </p>

        <Link
          href="/"
          className="btn bg-green-700 hover:bg-green-800 text-white rounded-xl mt-6 px-6"
        >
          ← হোম পেজে ফিরে যান
        </Link>

      </div>
    </div>
    );
};

export default NotFound;