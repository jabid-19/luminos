import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#1a212d] w-full text-white p-8">
      <div className="flex flex-wrap justify-between items-start gap-10">
        <div>
          <Image
            width={200}
            height={128}
            src="/images/luminos-logo-neg.svg"
            alt="logo"
          />
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">LUMINOS ENERGI AB</h2>
            <p className="text-base flex flex-col">
              <span>Box 5385</span>
              <span>102 49 Stockholm</span>
              <span>073-151 28 00</span>
            </p>
          </div>
          {/* <div>
            <h2 className="text-xl font-bold mb-2">Christian von Koch (VD)</h2>
            <p className="text-base">
              <span className="font-bold">E-post:</span>{" "}
              <span>christian@luminos.se</span>
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
