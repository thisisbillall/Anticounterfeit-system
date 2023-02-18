import { render } from "@testing-library/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import Button from "./Button";
// import Input from "./Input";
import QR from "./QR";
// import Web3Modal from 
const Intermediate = () => {
    const location = useLocation()
    const [prodId, setProdId] = useState('');
    const [propName, setProdName] = useState('');
    const [isBtn, setIsBtn] = useState(false);
    
    const onAddProduct =()=>{
        if(prodId && propName){
            setIsBtn(true);
        }
        else{
            alert("Enter both fields!!")
        }

    }

    const disconnet = ()=>{
      // const clear = await web
    }

  return (
    <>
      <h1>Intermediate Dashboard</h1>
      {console.log("vfsv", location.state)}
      <h3>{location.state.address}</h3>
      {/* <button>Logout

      </button> */}
      <input className="man_inp" type={"text"} placeholder={"ID"} onChange={(e)=>setProdId(e.target.value)}/>
      <input  className="man_inp" type={"text"} placeholder={"Location"} onChange={(e)=>setProdName(e.target.value)}/>
      
      <button className="man_btn" onClick={onAddProduct}>Update Location</button>

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
