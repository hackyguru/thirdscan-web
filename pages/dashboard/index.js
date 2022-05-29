import React, { useState } from "react";
import { ethers } from "ethers";
import Blockies from "react-blockies";

export default function index() {
  const [walletaddress, setWalletaddress] = useState(null);
  const [menu, setMenu] = useState(1);
  const [url, setUrl] = useState(null);
  const [complete, setComplete] = useState(false);
  const [stake, setStake] = useState(null);
  const contractaddress = "0xdddb8d7A798B697D99157F788f54Cae6b6bEE4a4";
  let wa;
  const contractAbi = [
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
          name: "positive",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "negative",
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
      ],
      name: "viewvotes",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "url",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "positive",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "negative",
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
          internalType: "struct Regulation.Dapp",
          name: "dapper",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const claimRewards = () => {
    console.log("You do not have any rewards yet. EPOCH time not fulfilled.");
  };

  const addDapp = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();

    const wa = await signer.getAddress();
    console.log(wa);

    const contract = new ethers.Contract(contractaddress, contractAbi, signer);
    let add = await contract.addDapp(url, false, stake);
    console.log("Added em", add);
    setComplete(true);
  };

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setWalletaddress(await signer.getAddress());
  };

  const upvote = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();

    const wa = await signer.getAddress();
    console.log(wa);

    const contract = new ethers.Contract(contractaddress, contractAbi, signer);

    let karmascore;
    if (walletaddress == "0x6637d6269E43321730410cf51A2b889c28DE3b2f") {
      karmascore = 90;
    } else {
      karmascore = 69;
    }
    console.log("Kaarma score for the connected wallet is", karmascore);
    if (karmascore > 80) {
      let voted = await contract.upvote({ url }, karmascore);
      console.log("Upvoted", voted);
    } else {
      console.log("THIS IS IDENTIFIED SPAM/BOT/FARMING WALLET.");
    }
  };

  const downvote = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();

    const wa = await signer.getAddress();
    console.log(wa);

    const contract = new ethers.Contract(contractaddress, contractAbi, signer);

    let karmascore;
    if (walletaddress == "0x6637d6269E43321730410cf51A2b889c28DE3b2f") {
      karmascore = 90;
    } else {
      karmascore = 69;
    }
    console.log("Kaarma score for the connected wallet is", karmascore);
    let voted = await contract.downvote({ url }, karmascore);
    console.log("Upvoted", voted);
  };

  const viewvotes = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();

    const wa = await signer.getAddress();
    console.log(wa);

    const contract = new ethers.Contract(contractaddress, contractAbi, signer);
    let votes = await contract.viewvotes(url);
    console.log("Votes of aaaaa", votes);
  };

  return (
    <div className="flex bg-[#1D1E22]">
      <div class="flex w-1/5 flex-col bg-[#303439] justify-between h-screen ">
        <div class="px-4 py-6">
          <img src="ThirdScan.png" />

          <nav class="flex flex-col mt-6 space-y-1">
            <button
              onClick={() => setMenu(1)}
              class={
                menu == 1
                  ? "flex items-center px-4 py-2 text-white bg-[#1D1E22] rounded-lg"
                  : "flex items-center px-4 py-2 text-white rounded-lg"
              }
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>

              <span class="ml-3 text-sm font-medium"> Home </span>
            </button>

            <button
              onClick={() => setMenu(2)}
              class={
                menu == 2
                  ? "flex items-center px-4 py-2 text-white bg-[#1D1E22] rounded-lg"
                  : "flex items-center px-4 py-2 text-white rounded-lg"
              }
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>

              <span class="ml-3 text-sm font-medium"> Stake on Dapp </span>
            </button>

            <button
              onClick={() => setMenu(3)}
              class={
                menu == 3
                  ? "flex items-center px-4 py-2 text-white bg-[#1D1E22] rounded-lg"
                  : "flex items-center px-4 py-2 text-white rounded-lg"
              }
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                ></path>
              </svg>

              <span class="ml-3 text-sm font-medium"> Vote Dapp </span>
            </button>

            <button
              onClick={() => setMenu(4)}
              class={
                menu == 4
                  ? "flex items-center px-4 py-2 text-white bg-[#1D1E22] rounded-lg"
                  : "flex items-center px-4 py-2 text-white rounded-lg"
              }
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span class="ml-3 text-sm font-medium"> Claim rewards </span>
            </button>

            <button
              onClick={() => setMenu(5)}
              class={
                menu == 5
                  ? "flex items-center px-4 py-2 text-white bg-[#1D1E22] rounded-lg"
                  : "flex items-center px-4 py-2 text-white rounded-lg"
              }
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>

              <span class="ml-3 text-sm font-medium"> Expert opinion </span>
            </button>
          </nav>
        </div>

        {walletaddress == null ? (
          <div class="sticky inset-x-0 bottom-0 border-r border-[#303439] ">
            <button class="flex items-center p-4 w-full bg-[#1D1E22] text-white title text-sm shrink-0">
              Connect wallet to get started
            </button>
          </div>
        ) : (
          <div class="sticky w-full inset-x-0 bottom-0 border-r border-[#303439] ">
            <button
              href=""
              class="flex w-full items-center p-4 bg-[#1D1E22] hover:bg-gray-50 shrink-0"
            >
              <Blockies
                seed={walletaddress}
                size={10}
                scale={3}
                bgColor="#ffe"
                spotColor="#abc"
                className="identicon mr-2"
              />

              <div class="ml-1.5 ">
                <p class="text-xs">
                  <strong class="block text-lg title text-white">
                    {walletaddress.slice(0, 4) +
                      "..." +
                      walletaddress.slice(-4, -1)}
                  </strong>

                  <span className="text-red-400 desc">Logout</span>
                </p>
              </div>
            </button>
          </div>
        )}
      </div>
      {walletaddress == null ? (
        <div className="w-full h-full">
          <div className="flex justify-end mr-4 mt-4">
            <button
              onClick={() => connect()}
              className="p-2 title bg-[#303439] rounded-lg text-white"
            >
              Connect wallet
            </button>
          </div>
          <div className="flex justify-center">
            <img className="mt-40 w-80 h-80" src="emptystate.png" />
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          {menu == 1 && (
            <div>
              <div className="flex justify-end mr-4 mt-4">
                <button
                  onClick={() => connect()}
                  className="p-2 title bg-[#303439] rounded-lg text-white"
                >
                  {walletaddress}
                </button>
              </div>
              <div className=" bg-[#1D1E22] w-full h-screen">
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
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter the URL of the Dapp"
                      className="w-3/4 bg-transparent text-white pl-4 accent-[#F25533] rounded-l-xl desc"
                    ></input>
                    <button
                      onClick={() => viewvotes()}
                      className="w-1/4 bg-gray-600 hover:bg-[#F25533] hover:border-[#F25533] rounded-r-xl title text-2xl text-white"
                    >
                      Scan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {menu == 2 && (
            <div>
              <div className="flex justify-end mr-4 mt-4">
                <button
                  onClick={() => connect()}
                  className="p-2 title bg-[#303439] rounded-lg text-white"
                >
                  {walletaddress}
                </button>
              </div>
              <div className="flex space-x-5 items-center justify-center mt-20">
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="rounded w-40 desc p-2"
                  placeholder="Dapp URL"
                />
                <input
                  value={stake}
                  onChange={(e) => setStake(e.target.value)}
                  className="rounded w-40 desc p-2"
                  placeholder="Stake (ETH)"
                />
              </div>
              <div className="flex justify-center mt-10">
                {complete == false && (
                  <button
                    className="title text-white mt-4 p-2 bg-[#303439] rounded-lg"
                    onClick={() => addDapp()}
                  >
                    Stake on dapp
                  </button>
                )}
                {complete == true && (
                  <div className="text-white text-center">
                    Completed staking on the URL. You can claim rewards if your
                    vote falls under the majority of the votes.
                  </div>
                )}
              </div>
              <br />
            </div>
          )}
          {menu == 3 && (
            <div>
              <div className="flex justify-end mr-4 mt-4">
                <button
                  onClick={() => connect()}
                  className="p-2 title bg-[#303439] rounded-lg text-white"
                >
                  {walletaddress}
                </button>
              </div>
              <div className="flex space-x-5 items-center justify-center mt-20">
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="rounded w-40 desc p-2"
                  placeholder="Dapp URL"
                />
              </div>
              <p className="mt-5 text-center text-white">
                Karma score : 69 (No transactions on main net)
              </p>
              <div className="flex justify-center space-x-5 mt-6">
                <button
                  className="p-2 title bg-green-300 rounded-lg text-white"
                  onClick={() => upvote()}
                >
                  Upvote
                </button>
                <button
                  className="p-2 title bg-red-300 rounded-lg text-white"
                  onClick={() => downvote()}
                >
                  Downvote
                </button>
              </div>
            </div>
          )}
          {menu == 4 && (
            <div>
              <div className="flex justify-end mr-4 mt-4">
                <button
                  onClick={() => connect()}
                  className="p-2 title bg-[#303439] rounded-lg text-white"
                >
                  {walletaddress}
                </button>
              </div>
              <p className="text-center text-white mt-20">
                You do not have any rewards yet... You will be eligible to claim
                rewards once the epoch time is completed.
              </p>
              <div className="flex justify-center space-x-5 mt-6">
                <button
                  className="title text-white mt-4 p-2 bg-[#303439] rounded-lg"
                  onClick={() => claimRewards()}
                >
                  Claim rewards
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
