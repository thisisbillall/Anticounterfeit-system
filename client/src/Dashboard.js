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

const ID = "0x9860a213fda848f992e89fdca1e8bfe714b7f7ebf09be0c9854b0c6a8bc3df53";

const Dashboard = () => {
  // to store address of the Wallet Owner
  const [accAddress, setAccountAddress] = useState(null);
  const [fetchId, setFetchedId] = useState(null);
  let isRemoved = false;

  const [data, setData] = useState([
    { name: null, next: null, exp: null, mrp: null, package: null },
  ]);

  // to validate if metamask exist
  const isWalletExist = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      web3 = new Web3(Web3.givenProvider);
      con_addr = "0x84c476Fc3ddf551c59Da6364C54477c6406384b1";
      sampleContract = new web3.eth.Contract(sample_abi, con_addr);
      return true;
    }
    alert("Wallet doesn't Exist! Install it");
    return false;
  };

  const create = async () => {
    const wallet = await isWalletExist();
    if (wallet) {
      const accs = await window.ethereum.enable();
      const acc = accs[0];
      setAccountAddress(acc);

      sampleContract.methods
        .create("Dolo500", acc, 25, 5, 1)
        .estimateGas()
        .then((gas) => {
          console.log(gas);
          sampleContract.methods
            .create("Dolo500", acc, 25, 5, 1)
            .send({
              from: acc,
              gas,
            })
            .then((resp) => {
              setFetchedId(resp.events.created.returnValues.ret_id);
              console.log("after search", resp.events.created.returnValues);
              alert("Product added Successfully!");
              console.log(fetchId);
            })
            .catch((err) => {
              console.log(err);
              alert("Something went wrong", err);
            });
        })
        .catch((err) => {
          let obj = JSON.parse(err.message.substring(err.message.indexOf("{")));
          console.log(obj.data.reason);
          alert(obj.data.reason);
        });
    }
  };

  const remove = async () => {
    const wallet = await isWalletExist();
    if (wallet) {
      const accs = await window.ethereum.enable();
      const acc = accs[0];
      setAccountAddress(acc);

      sampleContract.methods
        .remove(ID)
        .estimateGas()
        .then((gas) => {
          console.log(gas);
          sampleContract.methods
            .remove(ID)
            .send({
              from: acc,
              gas,
            })
            .then((resp) => {
              console.log(resp);
              console.log(resp.events.removed.returnValues.ret_value);
              isRemoved=resp.events.removed.returnValues.ret_value;
              if(isRemoved) alert(fetchId," Removed Successfully!")
              else  alert(fetchId," Not Removed :(")
            })
            .catch((err) => {
              console.log(err);
              alert("Something went wrong", err);
            });
        })
        .catch((err) => {
          let obj = JSON.parse(err.message.substring(err.message.indexOf("{")));
          console.log(obj.data.reason);
          alert(obj.data.reason);
        });
    }
  };

  
  return (
    <div>
      <h6>{fetchId ? "Added Successfully" : ""}</h6>
      <h1>{data[0].name}</h1>
      <h5>Acc Owner: {accAddress}</h5>
      <h6>Prod Id: {fetchId}</h6>
      <button onClick={create}> Get Details</button>
      <button onClick={remove}> Remove</button>
    </div>
  );
};

export default Dashboard;
