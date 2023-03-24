import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Main = () => {
  return (
    <div className="text-[#1a212d] ">
      <div
        className="flex gap-8 flex-col xl:flex-row xl:justify-center py-20"
        style={{
          backgroundImage: "url(../images/solar1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center max-w-5xl text-center px-6">
          <h1 className="text-4xl md:text-5xl break-words mb-8  text-[#fab300] ">
            LUMINOS ENERGI – SOLCELLER FÖR FÖRETAG!
          </h1>
          <p className="text-xl font-light">
            Det är en mycket god idé att investera i solceller för ditt företag
            och fastighet! I takt med att elpriserna stigit finns det idag
            faktiskt få argument mot att skaffa en solcellsanläggning. Med
            solceller får ditt företag nämligen ner kostnaderna för er egen
            elförbrukning samtidigt som eventuell överskottsel kan säljas genom
            ett produktionsavtal. Dessutom gör ni samtidigt miljön en stor
            tjänst utöver att ni också gör er mindre beroende av elbolagen.
            Genom att investera i solceller stärker ditt företag också sin
            miljöprofil och blir ett föredöme för andra företag!
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <Link href="/intresseanmalan">
              <button className="rounded-full py-3 px-8 text-2xl  bg-[#1a212d] text-white cursor-pointer hover:bg-[#fab300]">
                Intresseanmälan
              </button>
            </Link>
            <Link href="/kontakt">
              <button className="rounded-full py-3 px-8 text-2xl  border-4 border-[#fab300] text-[#fab300] cursor-pointer hover:bg-[#fab300] hover:text-white">
                Kontakt
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-col-reverse md:flex-row-reverse  mx-auto flex max-w-7xl justify-between gap-10 bg-white py-20 px-8 text-base text-gray md:gap-20 xl:px-6">
        <div className="flex min-w-[300px]">
          <Image
            width={500}
            height={500}
            className="h-full w-full bg-white object-cover"
            src="/images/solar2.jpg"
            alt="Solar panel"
          />
        </div>
        <div className="flex max-w-2xl items-center">
          <div>
            <p className="my-8 text-xl font-light text-center md:text-left">
              Idag finns en stor outnyttjad resurs i Sverige – nämligen alla
              tomma tak på våra företag och hos våra fastighetsägare. Vi på
              Luminos Energi arbetar dagligen med att få beslutsfattare att få
              upp ögonen för den stora nyttan med solceller och vilken bra affär
              det faktiskt är. Vi på Luminos Energi hjälper våra kunder hela
              vägen från start till mål med investeringen i en
              solcellsanläggning. Tillsammansmed oss gör våra kunder en trygg
              och lönsam investering!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
