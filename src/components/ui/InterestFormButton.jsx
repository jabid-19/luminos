import Link from "next/link";
import React from "react";

export const InterestFormButton = () => {
  return (
    <div className="flex justify-center mt-20">
      <Link href="/intresseanmalan">
        <button className="rounded-full py-3 px-8 text-2xl  bg-[#1a212d] text-white cursor-pointer hover:bg-[#fab300]">
          Intresseanmälan
        </button>
      </Link>
    </div>
  );
};
