import React, { useState } from "react";
import Navbar from "../components/Navbar";

// functional imports
import axios from "axios";

export default function result() {
  let url = "ipfs://thirdstorage.com";

  // Check protocol
  function checkprotocol() {
    var split = url.toString().split("/");
    console.log(split);
    const deprotocol = ["ipfs:", "ipns:"];
    const ceprotocol = ["https:", "http:"];

    if (ceprotocol.some((v) => split[0].includes(v))) {
      console.log("It is a centralized protocol");
    }
    if (deprotocol.some((v) => split[0].includes(v))) {
      console.log("It is a decentralized protocol");
    }
  }

  // Check domain
  function checkdomain() {
    const dedomain = ["eth", "crypto"];
    const cedomain = ["com", "io", "net", "xyz"];

    var dotsplit = url.toString().split(".");
    console.log(dotsplit);

    if (cedomain.some((v) => dotsplit[1].includes(v))) {
      console.log("It is a centralized domain");
    }
    if (dedomain.some((v) => dotsplit[1].includes(v))) {
      console.log("It is a decentralized domain");
    }
  }

  // DNS Lookup

  // Check CDN of assets

  //  Databases

  // Lookup the CryptoScamDB and Ethereum Phishing detector

  // Ads

  // Domain Owner details

  // Calling functions
  checkprotocol();
  checkdomain();

  return (
    <div className=" bg-gradient-to-b from-[#080F1A] to-[#192029] w-full h-screen">
      <Navbar />
      <div className="text-white desc ml-10 mt-10">
        <p>Debugga</p>
        <p></p>
      </div>
    </div>
  );
}
