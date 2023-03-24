import Head from "next/head";
import React from "react";
import { InterestFormButton } from "../src/components/ui/InterestFormButton";
import { SellElectricityMain } from "../src/components/SellElectricityMain";

const attSaljaSolel = () => {
  return (
    <div>
      <Head>
        <title>Luminos Energi | Att sälja solel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SellElectricityMain />
      <InterestFormButton />
    </div>
  );
};

export default attSaljaSolel;