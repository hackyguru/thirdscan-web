import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className=" bg-[#1D1E22] w-full h-screen">
      <Navbar />
      <h1 className="title pt-24 text-4xl md:text-6xl text-white text-center">
        Is the dapp really
      </h1>
      <h1 className="title pt-1 md:pt-4 text-4xl md:text-6xl text-[#F25533] text-center">
        decentralized?
      </h1>
      <p className="desc text-gray-500 text-center mt-10 text-xs md:text-lg">
        A lot of imposters claim to be decentralized.
        <br />
        Don't risk yourself - find the truth in a matter of seconds!
      </p>
      <div className="mt-10 md:mt-20 flex justify-center">
        <div className="border-2 w-full mx-6 md:mx-0 md:w-1/2 border-gray-600 h-14 rounded-xl flex justify-between">
          <input
            placeholder="Enter the URL of the Dapp"
            className="w-3/4 bg-transparent text-white pl-4 accent-[#F25533] rounded-l-xl desc"
          ></input>
          <button className="w-1/4 bg-gray-600 hover:bg-[#F25533] hover:border-[#F25533] rounded-r-xl title text-2xl text-white">
            Scan
          </button>
        </div>
      </div>
    </div>
  );
}
