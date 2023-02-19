import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addNext, ownerAddress, verify } from "../connect";
// import Button from "./Button";
// import Input from "./Input";
import QR from "./QR";
// import Web3Modal from 

const Intermediate = () => {

    // const [currUser, setCurrUser] = useState ("0xdF54333bcb3C6F82594c583e6F222dBFdF63680a");
    const[prodID, setProdID] = useState(null);
    const[nextAddr, setNextAddr] = useState(null);
    
    const [isValidID, setValidID ] = useState(false);
    
    const [propName, setProdName] = useState('');
    const [isBtn, setIsBtn] = useState(false);
    
    const upDateLocation = async()=>{
        // if(!prodID || !nextAddr){
        //   alert("Please Enter All the Fields!")
        //   return;
        // }

        verify(prodID)
        .then(res=>{
          console.log("res", res.events?.verify?.returnValues?.ret_value)
          if((res.events?.removed?.returnValues?.ret_value)==true){
            addNext(prodID, nextAddr)
            .then(res=>{
              alert("Update Success!")
            })
            .catch(err=>{
              alert(err)
            })
          }
          else{
              alert("UnAuthorized!!")
          }
        }).catch(err=>{
          alert("Smth Went Wrong!")
          console.log(err)
        })
        
    }

  return (
    <>
      <h1>Intermediate Dashboard</h1>
      
      <input className="man_inp" type={"text"} placeholder={"ID"} onChange={(e)=>setProdID(e.target.value)}/>
      <input  className="man_inp" type={"text"} placeholder={"Location"} onChange={(e)=>setNextAddr(e.target.value)}/>
      
      <button className="man_btn" onClick={upDateLocation}>Update Location</button>

      {isBtn &&(
        <>
            <QR id={prodID} name={propName}/>
        </>
    )}


    </>
  );
};
export default Intermediate;
