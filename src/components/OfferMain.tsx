import React from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Projektering & kalkylering",
    description:
      "Vi tar fram kompletta underlag, beräkningar och illustrationer för att ni ska kunna fatta ert beslut på så goda grunder som möjligt. ",
    icon: "/images/icon1.png",
  },
  {
    id: 2,
    title: "Tak",
    description:
      "Då solceller vanligtvis har en livslängd på över 25 år är det ofta lämpligt att byta ytskikt på taket innan montering sker. Vi löser även detta förmånligt och inkluderar bytet i planeringen redan från början.",
    icon: "/images/icon2.png",
  },
  {
    id: 3,
    title: "Komponenter",
    description:
      "Vi på Luminos Energi använder uteslutande komponenter av högsta kvalitet i våra anläggningar. En investering i solceller är långsiktig och då är det klokt att satsa på det bästa.",
    icon: "/images/icon3.png",
  },
  {
    id: 4,
    title: "Tillbehör",
    description:
      "Till er solcellsanläggning finns det ett antal val att göra. Är det lönsamt med en tillhörande batterilösning? Behöver ni laddstolpar? Vi löser även dessa delar.",
    icon: "/images/icon4.png",
  },
  {
    id: 5,
    title: "Från ax till limpa",
    description:
      "Från att beställningen är gjord tar vi på Luminos Energi hand om samtliga delar i montage- och kontrollprocessen fram till att er besiktningsman godkänner anläggningen. Du som kund kan sedan också teckna ett löpande serviceavtal med oss.",
    icon: "/images/icon5.png",
  },
];

export const OfferMain = () => {
  return (
    <div className="text-[#1a212d] ">
      <div
        className="py-20 px-8 text-center flex flex-col items-center"
        style={{
          backgroundImage: "url(../images/solar1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl break-words mb-8 inline-block text-[#fab300] ">
          LUMINOS ERBJUDANDE
        </h1>
        <p className="text-2xl font-light max-w-6xl">
          När man som företag och fastighetsägare investerar i solceller är det
          tryggt och bekvämt att samma leverantörstår för alla delar i
          processen. Gemensamt kommer vi fram till vilken anläggning som passar
          just er bäst och vi följer ersedan hela vägen fram till att
          anläggningen driftsätts. Vi på Luminos Energi vet att solceller inte
          behöver vara krångligt och invecklat och därför erbjuder vi också våra
          kunder avtal för löpande service och underhåll.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 px-8">
        {cardData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-5 border-4 border-[#fab300] p-6 shadow-lg rounded text-center"
          >
            <div className="relative w-full flex justify-center">
              <Image
                width={100}
                height={100}
                // className="h-full w-full bg-white object-cover"
                src={data.icon}
                alt="Solar panel"
              />
            </div>
            <h2 className="text-3xl font-medium text-[#fab300]">
              {data.title}
            </h2>
            <p className="font-light text-lg">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
