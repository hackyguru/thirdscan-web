import React, { useState } from "react";
import { ethers } from "ethers";

export default function Navbar() {
  const [walletaddress, setWalletaddress] = useState(null);
  const contractaddress = "0x375039f207cAcAbD169A5BC87e26317bc9Eec7cb";
  let wa;
  const contractAbi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "url",
          type: "string",
        },
        {
          internalType: "bool",
          name: "blacklisted",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "stake",
          type: "uint256",
        },
      ],
      name: "addDapp",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "dapps",
      outputs: [
        {
          internalType: "string",
          name: "url",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "score",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "blacklisted",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "stake",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "url",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "defiscore",
          type: "uint256",
        },
      ],
      name: "downvote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "url",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "defiscore",
          type: "uint256",
        },
      ],
      name: "upvote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();

    const wa = await signer.getAddress();
    console.log(wa);

    const contract = new ethers.Contract(
      contractaddress,
      contractAbi,
      provider
    );
    let owner = await contract.owner();
    console.log("Yo the owner is", owner);
  };
  return (
    <div className="w-full flex justify-between px-10 py-4">
      {/* <h1 className="title text-white text-2xl">DappMask</h1> */}
      <img src="dappmask.png" className="h-14 w-14" />
      <button
        onClick={() => connect()}
        className="p-3 bg-gray-600 rounded-xl title text-xl text-white"
      >
        Connect wallet
      </button>
    </div>
  );
}
