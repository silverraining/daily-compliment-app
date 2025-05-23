"use client";

import { useCompletion } from "ai/react";

export default function HomePage() {
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/compliment",
  });

  const isPending = isLoading;

  const handleClick = () => {
    if (isPending) return; // 로딩 중이면 클릭 방지
    complete("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-12 bg-gradient-to-b from-yellow-50 to-white">
      <div className="flex flex-col items-center gap-6">
        <h1 className="whitespace-nowrap text-3xl md:text-4xl font-extrabold text-gray-800 drop-shadow-sm">
          Your Daily Compliment ✨
        </h1>

        <button
          onClick={handleClick}
          disabled={isPending}
          className={`relative flex items-center justify-center px-10 py-4 font-bold rounded-full shadow-md transition-all duration-200
          ${
            isPending
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-300 text-gray-900 cursor-pointer"
          }`}
        >
          {isPending ? (
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Get Today's Compliment"
          )}
        </button>
      </div>

      {completion && (
        <div className="animate-fade-in mt-8 text-center text-2xl font-semibold text-gray-700 max-w-2xl px-6">
          “{completion}”
        </div>
      )}
    </div>
  );
}
