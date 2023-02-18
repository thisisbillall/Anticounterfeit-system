import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { sample_abi } from "./abi";

// let web3 = new Web3(Web3.givenProvider);
// const con_addr = '0x28f9540DaB3E9FFF4F64e62f51d0D1F00B376a14';
// const sampleContract = new web3.eth.Contract(sample_abi, con_addr);
// const sampleContract =  web3.eth.contract(JSON.parse(sample_abi)).at(con_addr);

let web3;
let con_addr;
let sampleContract;

const ID = "0xad150d42a75f5644fedca3b31315b437739bdaae746759bfa926496d9696e471";

const Dashboard = () => {
  
  // to store address of the Wallet Owner
  const [accAddress, setAccountAddress] = useState(null);
  const [fetchId, setFetchedId] = useState(null);

  const [data, setData] = useState([{name:null, next:null, exp:null, mrp:null,package:null}]);

  // to validate if metamask exist
  const isWalletExist = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      web3 = new Web3(Web3.givenProvider);
      con_addr = "0x282441e3286B1037b0F8B2a37fC6172aB17432a8";
      sampleContract = new web3.eth.Contract(sample_abi, con_addr);
      return true;
    }
    return false;
  };

  
  const getDetails = async () => {
    const wallet = await isWalletExist();
    if (wallet) {
      const accs = await window.ethereum.enable();
      const acc = accs[0];
      setAccountAddress(acc);
      const gas = 222;
      sampleContract.methods
      .get_details("0xa67e9ae517c2ad8039a1c7b814d4b399b92e4ffebefbfa4a1d316ffe79dd1b8c")
      .estimateGas()
      .then(res=>console.log("abc"))
      .catch(err => 
        {
          let obj = JSON.parse(err.message.substring(err.message.indexOf("{")));
          console.log(obj.data.reason)
        }
         
        );
      console.log(gas);


      // const resp = await sampleContract.methods
      //   .get_details("0xa67e9ae517c2ad8039a1c7b814d4b399b92e4ffebefbfa4a1d316ffe79dd1b8c")
      //   .send({
      //     from: acc,
      //     gas,
      //   });

        // console.log(resp);
    } else {
      alert("Wallet doesn't Exist! Install it");
    }
  };

  return (
    <div>
      <h1>{data[0].name}</h1>
      <h5>Acc Owner: {accAddress}</h5>
      <h6>Prod Id: {fetchId}</h6>
      <button onClick={getDetails}> Get Details</button>
    </div>
  );
};

export default Dashboard;
