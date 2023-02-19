import Web3 from "web3";
import { sample_abi } from "./abi";

let sampleContract;
 // to validate if metamask exist
  const isWalletExist = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      let web3 = new Web3(Web3.givenProvider);
      let con_addr = "0x84c476Fc3ddf551c59Da6364C54477c6406384b1";
      sampleContract = new web3.eth.Contract(sample_abi, con_addr);
      return true;
    }
    return false;
  };


  export const fetchDetails = async (_id, _callback) => {
    console.log(_id);
    const wallet = await isWalletExist();
    if (wallet) {
      const accs = await window.ethereum.enable();
      const acc = accs[0];
      sampleContract.methods
        .get_details(_id)
        .estimateGas()
        .then(gas => {
          return sampleContract.methods
          .get_details(_id)
          .send({
              from: acc,
              gas,
            })
            .then(res => {
              console.log(res.events.details.returnValues.ret_data);
              _callback(res.events.details.returnValues.ret_data);
            })
            .catch((err) => {
              console.log(err);
              alert("Something went wrong", err);
            });
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong", err);
        });
    }
  };