
export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
       <span className="loading loading-spinner loading-lg text-green-700"></span>

      <h2 className="text-xl font-bold">
        লোড হচ্ছে...
      </h2>

      <p className="text-gray-500 text-sm">
        অনুগ্রহ করে অপেক্ষা করুন
      </p>
    </div>
  );
}