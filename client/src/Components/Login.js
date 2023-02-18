import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Customer from "./Customer";


const Login = () => {
    const nav = useNavigate()
  const [address, setaddress] = useState();
  const [balance, setbalance] = useState();
  const connectWallet = (user) => {
    if (window.ethereum) {
      console.log("Have metamask");
    } else {
      alert("Install Metamask!");
    }
    // get account address
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      console.log(res);
      if (user == "manufacturer") nav('/manufacturer',{state:{address:res}});
      else if (user == "intermediate") nav('/intermediate', {state:{address:res}});
      setaddress(res);
    });



    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        console.log(balance);
      });
  };
  return (
    <>
    <h1 className="heading">Anti-Counterfeiting System</h1>
    <div className="login-div">
            <div className="connectWalletContainer">
                <button onClick={()=>connectWallet("manufacturer")}  className="connectWalletBtn">
                  <img
                    src={
                      "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                    }
                    
                    className="img"
                  />{" "}
                  {"Manufacturer Connect"}
                </button>
              
            </div>
            <div className="connectWalletContainer">
                <button onClick={()=>connectWallet("intermediate")} className="connectWalletBtn">
                  <img
                    src={
                      "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                    }
                    className="img"
                  /><br/>
                  {"Intermediate Connect"}
                </button>
              
            </div>
            <div className="connectWalletContainer">
                <button  onClick={()=>{nav('/verify')}} className="connectWalletBtn">
                  <img
                    src={
                      "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                    }
                    className="img"
                  /><br/>
                  {"Customer Verify"}
                </button>
              
            </div>
       
      {/* <button className="walet-btns"  onClick={connectWallet}>
        Manufacturer Connect 
      </button>
      <button className="walet-btns"  onClick={connectWallet}>
        Intermediate Connect
      </button>
      <button className="walet-btns"  onClick={connectWallet}>
        Customer Verify
      </button> */}
    </div>
    </>
  );
};
export default Login;
