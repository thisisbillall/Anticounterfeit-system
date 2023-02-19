import { useState } from "react";
import QR from "./QR";
import {  create, remove } from "../connect";


const Manufacturer = () => {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [exp_date, setExp_date] = useState(null);
  const [mrp, setMrp] = useState(null);
  const [packOf, setPackOf] = useState(0);
  const [location, setLocation] = useState(null);
  

  const [btn, setBtn] = useState(false);

  // const [owner, setOwner] = useState(accAddress);
  const [fetchId, setFetchedId] = useState(null);

  const [toRemove, setToRemove] = useState(null);
  let isRemoved = false;

  // const location = useLocation();

  const onAddProduct = async () => {
    if (!name || !address) {
      alert("Please Enter Name, Next Address and Manufacture Date!!");
      return;
    } else {
      create(name, address, exp_date, mrp, packOf, location)
      .then(res=>{
        console.log(res)
        console.log("res", res.events?.created?.returnValues?.ret_id)
        setFetchedId(res.events?.created?.returnValues?.ret_id)
        setBtn(true)
        alert("Added Successfully!")
      }).catch(err=>{
        alert("Something went Wrong!")
        console.log(err)
      })
    }
  };

  const onRemoveProduct = async () => {
    if (!toRemove) {
      alert("Please Enter Product Id!!");
      return;
    } else {
      remove(toRemove)
      .then(res=>{
        console.log("res", res.events?.removed?.returnValues?.ret_value)
        alert("Removed Successfully!")
      }).catch(err=>{
        alert("This Product doesn't exist on Blockchain!")
        console.log(err)
      })
    }
  };


  return (
    <div className="mfg_wrapper">
      {/* <h1>Manufacturer Dashboard</h1> */}

      {/* Add product section */}
      <div>
        <h2>Add Product</h2>
        {/* <h5>Acc Owner: {owner}</h5> */}
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
         <input
          className="man_inp"
          type="text"
          placeholder={"Locaton"}
          onChange={(e) => setLocation(e.target.value)}
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
