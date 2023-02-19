import { useState } from "react";
import { useLocation } from "react-router-dom";
import QR from "./QR";
import Web3 from "web3";
import { sample_abi } from "../abi.js";
import { AnimatePresence } from "framer-motion";

let web3;
let con_addr;
let sampleContract;

const Manufacturer = () => {
  // string name;
  // address next_addr;
  // uint date;
  // uint expiry;
  // uint mrp;
  // uint packof;

  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [exp_date, setExp_date] = useState(null);
  const [mrp, setMrp] = useState(null);
  const [packOf, setPackOf] = useState(0);

  const [btn, setBtn] = useState(false);

  const [accAddress, setAccountAddress] = useState(null);
  const [fetchId, setFetchedId] = useState(null);

  const [toRemove, setToRemove] = useState(null);
  let isRemoved = false;

  const location = useLocation();

  const onAddProduct = () => {
    if (!name || !address) {
      alert("Please Enter Name, Next Address and Manufacture Date!!");
      return;
    } else {
      create();
    }
  };

  const onRemoveProduct = () => {
    if (!toRemove) {
      alert("Please Enter Product ID!!");
      return;
    } else {
      remove();
    }
  };

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
      console.log(typeof accAddress, accAddress);

      sampleContract.methods
        .create(name, accAddress, exp_date, mrp, packOf)
        .estimateGas()
        .then((gas) => {
          console.log(gas);
          sampleContract.methods
            .create(name, accAddress, exp_date, mrp, packOf)
            .send({
              from: acc,
              gas,
            })
            .then((resp) => {
              setFetchedId(resp.events.created.returnValues.ret_id);
              setBtn(true);
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
          console.log(err);
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
        .remove(toRemove)
        .estimateGas()
        .then((gas) => {
          console.log(gas);
          sampleContract.methods
            .remove(toRemove)
            .send({
              from: acc,
              gas,
            })
            .then((resp) => {
              console.log(resp);
              console.log(resp.events.removed.returnValues.ret_value);
              isRemoved = resp.events.removed.returnValues.ret_value;
              if (isRemoved) alert(fetchId, " Removed Successfully!");
              else alert(fetchId, " Not Removed :(");
            })
            .catch((err) => {
              console.log(err);
              alert("Something went wrong", err);
            });
        })
        .catch((err) => {
          let obj = JSON.parse(err.message.substring(err.message.indexOf("{")));
          console.log(err);
          alert(obj.data.reason);
        });
    }
  };

  return (
    <div className="mfg_wrapper">
      {/* <h1>Manufacturer Dashboard</h1> */}

      {/* Add product section */}
      <div>
        <h2>Add Product</h2>
        <h5>Acc Owner: {accAddress}</h5>
        <h6>Prod Id: {fetchId}</h6>
        <input
          className="man_inp"
          type={"text"}
          placeholder={"Product Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="man_inp"
          type={"text"}
          placeholder={"Next Address"}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="man_inp"
          type={"number"}
          placeholder={"Expiry Date (optional)"}
          onChange={(e) => setExp_date(e.target.value)}
        />
        <input
          className="man_inp"
          type="number"
          placeholder={"MRP (optional)"}
          onChange={(e) => setMrp(e.target.value)}
        />
        <input
          className="man_inp"
          type="number"
          placeholder={"Pack of"}
          onChange={(e) => setPackOf(e.target.value)}
        />
        <button className="man_btn" onClick={onAddProduct}>
          Add Product
        </button>
      </div>

      {/* Remove Product Section */}

      <div>
        <h2>Remove Product</h2>

        <input
          className="man_inp"
          type={"text"}
          placeholder={"Product ID"}
          onChange={(e) => setToRemove(e.target.value)}
        />
        <button onClick={onRemoveProduct}>Remove Product</button>
      </div>

      {/* Scan QR Section */}
      <div>
        {btn && (
          <>
            {exp_date}
            <h2>QR will be generated here</h2>
            <QR id={fetchId} name={name} />
          </>
        )}
      </div>
    </div>
  );
};
export default Manufacturer;
