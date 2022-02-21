import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../../abi.json";

const CONTRACT_ADDRESS = "0xB79BE9acdf250AAf3D26b36B7F94BEcB237618a6";

async function connectWallet() {

  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    console.log("Connected", accounts[0]);

  } catch (error) {
    console.log(error)
  }
}


const Mintbtn = () => {

  const [value, setValue] = useState('');

  async function claim() {
  
    try {
    console.log("minting");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
    if(value>0 && value<5) {
    let txn1 = await contract.claim(value, {value: ethers.utils.parseEther("0.0269")});
    let wait = await txn1.wait();
    console.log('Minted NFT');
    } 
    } 
    catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() => {
    connectWallet();
  }, [])

  const handleChange = (e) => {
    return setValue(e.currentTarget.value);
  };

  return (
    <>
      <div className="mint">
        <input
          className="mintinput"
          type="number"
          placeholder="Enter Amount (<5)"
          value={value}
          onChange={handleChange}
        />

        <button onClick={claim} className="container-btn" >
          <img src="/images/mint.svg" alt="" />
        </button>

      </div>
    </>
  );
};

export default Mintbtn;
