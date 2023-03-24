import React from "react";

const requirements = [
  {
    id: 1,
    title: "Småskalig elproduktion",
    lists: [
      "Inmatningsabonnemang med ett nätbolag ska finnas",
      "500 kWp i maxeffekt",
      "Framställning av förnybar el",
      "Fast anslutning till elnätet",
    ],
  },
  {
    id: 2,
    title: "Mikroproduktion",
    lists: [
      "Maximal huvudsäkring om högst 63A och max inmatningseffekt får som högst vara 43,5 kW",
      "Framställning av förnybar el",
      "Inmatningsabonnemang med ett nätbolag ska finnas ",
      "Fast anslutning till elnätet",
      "Uttag och inmatning av el sker via samma huvudsäkring och elmätare",
    ],
  },
  {
    id: 3,
    title: "Villkor för skattereduktion",
    lists: [
      "Max försäljning om 30 000 kWh per kalenderår - dock högst det antal kWh ni har tagit ut från elnätet",
      "Säkringskapacitet på max 100A",
      "Ersättning 60 öre per kWh totalt högst 18 000 kr per kalenderår",
      "Ersättning via deklarationen",
    ],
  },
];

export const SellElectricityMain = () => {
  return (
    <div className="text-[#1a212d] pt-20 px-8">
      <h1 className="text-4xl md:text-5xl mb-8 inline-block text-[#fab300]  break-words">
        ATT SÄLJA EL – SÅ GÅR DET TILL
      </h1>
      <p className="text-2xl font-light">
        Beroende på era specifika förutsättningar kan det bli så att er Beroende
        på era specifika förutsättningar kan det bli så att ersolcellsanläggning
        under vissa perioder producerar ett överskott av el. Detta elöverskott
        kan ni sälja och ni räknas då som småskalig producent eller
        mikroproducent. För att vara en småskalig producent gäller att er
        anläggning som högst får ha en effekt om 500 kWp. Vanligtvis förbrukar
        man som kund själv till stor del den el som solpanelerna producerar och
        säljer det eventuella överskott som inte används. Detta förbättrar
        investeringskalkylen. För att sälja el krävs att man som både småskalig-
        och mikroproducent uppfyller vissa krav. Dessa krav sammanfattas nedan.
        För detaljerad information hänvisas till Skatteverket eller
        <a
          target="_blank"
          href="https://svensksolenergi.se/att-installera-solenergi/skatteregler-for-solel"
          className="cursor-pointer focus:text-blue-500 hover:text-blue-500 active:text--blue-500 text-blue-400 underline"
        >
          https://svensksolenergi.se/att-installera-solenergi/skatteregler-for-solel
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-5">
        <div>
          <h2 className="text-3xl font-bold mb-2">1. Anslut er el</h2>
          <p className="text-base">
            Kontakta ert elnätsbolag och anmäl att ni framställer förnybar el
            och de ser sedan till att ni får ett inmatningsabonnemang. Detta
            abonnemang innebär att er anläggning är godkänd och motsvarar
            gällande bestämmer.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8">
            2. Kontrollera kraven (olika beroende på säkring)
          </h2>
          <div className="flex flex-col gap-5">
            {requirements.map((item) => (
              <div key={item.id}>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <ul className="font-light list-disc list-inside mt-2">
                  {item.lists.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
