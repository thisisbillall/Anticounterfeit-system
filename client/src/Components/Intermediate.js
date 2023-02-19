import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import {  addNext, verifyAndNext } from "../connect";

import QR from "./QR";

const Intermediate = () => {

    // const [currUser, setCurrUser] = useState ("0xdF54333bcb3C6F82594c583e6F222dBFdF63680a");
    const[prodID, setProdID] = useState(null);
    const[nextAddr, setNextAddr] = useState(null);
    
    const [location, setLocation ] = useState(null);
    
    // const [propName, setProdName] = useState('');
    // const [isBtn, setIsBtn] = useState(false);
    
    const upDateLocation = async()=>{
        // if(!prodID || !nextAddr){
        //   alert("Please Enter All the Fields!")
        //   return;
        // }

        verifyAndNext(prodID, nextAddr,location )
        .then(res=>{
          console.log(res)
          console.log("res", res.events?.verify?.returnValues?.ret_value)
        }).catch(err=>{
          alert("Smth Went Wrong!")
          console.log(err)
        })
        
    }

  return (
    <>
      <h1>Intermediate Dashboard</h1>
      
      <input className="man_inp" type={"text"} placeholder={"ID"} onChange={(e)=>setProdID(e.target.value)}/>
      <input  className="man_inp" type={"text"} placeholder={"Next Address"} onChange={(e)=>setNextAddr(e.target.value)}/>
      <input
          className="man_inp"
          type="text"
          placeholder={"Locaton"}
          onChange={(e) => setLocation(e.target.value)}
        />
      <button className="man_btn" onClick={upDateLocation}>Update Location</button>
{/* 
      {isBtn &&(
        <>
            <QR id={prodID} name={propName}/>
        </>
    )} */}


    </>
  );
};
export default Intermediate;
