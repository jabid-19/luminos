import Head from "next/head";
import React from "react";
import { InterestFormButton } from "../src/components/ui/InterestFormButton";
import { OfferMain } from "../src/components/OfferMain";

const luminosErbjudande = () => {
  return (
    <div>
      <Head>
        <title>Luminos Energi | Luminos Erbjudande</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <OfferMain />
        <InterestFormButton />
      </main>
    </div>
  );
};

export default luminosErbjudande;
