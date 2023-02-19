import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Button from "./Button";
// import Input from "./Input";
import QR from "./QR";
// import Web3Modal from 

const Intermediate = () => {

    const [currUser, setCurrUser] = useState ("0xdF54333bcb3C6F82594c583e6F222dBFdF63680a");
    const[prodID, setProdID] = useState(null);
    const[nextAddr, setNextAddr] = useState(null);
    
    const [isValidID, setValidID ] = useState(false);
    
    const [propName, setProdName] = useState('');
    const [isBtn, setIsBtn] = useState(false);
    
    const upDateLocation =()=>{
        if(!prodId || !nextAddr){
          alert("Please Enter All the Fields!")
          return;
        }
        

    }

    const disconnet = ()=>{
      // const clear = await web
    }

  return (
    <>
      <h1>Intermediate Dashboard</h1>
      
      <input className="man_inp" type={"text"} placeholder={"ID"} onChange={(e)=>setProdID(e.target.value)}/>
      <input  className="man_inp" type={"text"} placeholder={"Location"} onChange={(e)=>setProdName(e.target.value)}/>
      
      <button className="man_btn" onClick={upDateLocation}>Update Location</button>

      {isBtn &&(
        <>
            <QR id={prodId} name={propName}/>
        </>
    )}

{/* 
      <Input placeholder={"Enter Product ID"} on/>
      <Input placeholder={"Enter Product Name"}/> */}

      {/* <Button onClick={onAddProduct}/> */}
    </>
  );
};
export default Intermediate;
