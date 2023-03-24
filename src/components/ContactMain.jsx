import Image from "next/image";
import React from "react";
export const ContactMain = () => {
  return (
    <div className="text-[#1a212d] pt-20 px-8">
      <div className="flex flex-wrap items-start justify-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl break-words mb-8 inline-block text-[#fab300] ">
            KONTAKT
          </h1>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-bold mb-2">LUMINOS ENERGI AB</h2>
              <p className="font-light flex flex-col">
                <span>Box 5385</span> <span>102 49 Stockholm</span>
                <span>073-151 28 00</span>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">
                Christian von Koch (VD)
              </h2>
              <p className="text-base">
                <span className="font-bold">E-post:</span>
                <span>christian@luminos.se</span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex items-start justify-start">
          <Image
            src="/images/contact.gif"
            alt="my gif"
            height={500}
            width={500}
          />
        </div> */}
      </div>
    </div>
  );
};
