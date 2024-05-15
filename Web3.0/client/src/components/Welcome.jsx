import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import {Loader} from './';

function Welcome() {

  const connectWallet = ()=>{

  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col item-start justify-between md:pd-20 py-12 px-4">
       <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1"> 
          Send Crypto <br /> To Anywehere</h1>
          <p className="text-left mt-5 text-white font-light md:w9/12 w-11/12 text-base">
          Discover the dynamic realm of cryptocurrencies with ease on E-BLOCK, your secure gateway to effortless buying and selling.
          </p>
          <button type="button" onClick={()=>{connectWallet()}} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 cursor-pointer hover:bg[#2546bd]">
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
       </div>
      </div>
    </div>
  );
}

export default Welcome;