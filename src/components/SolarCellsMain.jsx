import React from "react";

const cardData = [
  {
    id: 1,
    title: "Besparing",
    description:
      "Under 2022 var genomsnittspriset på el 1,38 kr/kWh i Mellansverige (SE3) och 1,62 kr/kWh i södra Sverige (SE4). Till dessa priser ska sedan de fasta priserna läggas liksom elbolagens marginaler samt skatter. Det är alltid svårt att sia om priser men redan 2027 beräknas elöverskottet i Norrlands elområden (SE1 & SE2) vändas till underskott och elförbrukningen bedöms dessutom öka betydligt kommande år. Oavsett är solceller lönsamma som investering redan vid låga priser vilket vi gemensamt går igenom i vår analys. Dessutom kan idag överskottsel säljas vilketförbättrarkalkylen ytterligare.",
  },
  {
    id: 2,
    title: "Investering",
    description:
      "Vi på Luminos Energi har i grunden en finansiell utgångspunkt i varför företag och fastighetsägare ska investera i solceller. En modern anläggning idag avkastar vanligtvis 12-15 % per år vilket få kommersiella fastigheter, om ens några idag gör. En investering i en solcellsanläggning oavsett finansieringsform är därför en av de bästa investeringar ert företag kan göra. För fastighetsägare med lång investeringshorisont är det alltså ingen överdrift att kalla investeringen i solceller för självklar.",
  },
  {
    id: 3,
    title: "Klimat & varumärke ",
    description:
      "Som bekant har världen idag stora problem med att begränsa koldioxidutsläppen vilket är en direkt nödvändighet. Förutom att ert företag gör en mycket god investering gör ni samtidigt en verklig insats för klimatet då solceller sprarar stora mängder koldioxid. Som en direkt följd av att investera i solceller stärker ni er hållbarhetsprofil. Svenska företag ligger här i framkant och det är klokt att vara en del av detta.",
  },
];

export const SolarCellsMain = () => {
  return (
    <div className="text-[#1a212d]">
      <div
        className="py-20 px-8 text-center flex flex-col items-center"
        style={{
          backgroundImage: "url(../images/solar1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl break-words mb-8 inline-block text-[#fab300] ">
          VARFÖR SOLCELLER FÖR FÖRETAG?
        </h1>
        <p className="text-2xl font-light max-w-6xl">
          Att investera i en solcellsanläggning är idag en av de bästa
          investeringar du kan göra för ditt företag eller er fastighet. En
          solcellsanläggning har idag i de allra flesta fall en betydligt högre
          avkastning än själva fastigheten i sig. Med en solcellsanläggning
          höjer du därför vanligtvis värdet på er fastighetredan från dag ett.
          Dessutom gör ni klimatet en tjänst vilket är nog så viktigt.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        {cardData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-5 border-4 border-[#fab300] p-6 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#fab300]">{data.title}</h2>
            <p className="font-light">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
