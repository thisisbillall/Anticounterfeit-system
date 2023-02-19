
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { fetchDetails } from '../connect';
const Customer = (props) => {
  const [id, setId] = useState("");
  const [product, setProduct] = useState({
    name:"",
    man_date:0,
    expiry:0,
    mrp:0,
    packof:0
  })

  const fetchData = () => {
    fetchDetails(id, res =>{
        let obj = {
            name : res.name,
            man_date : res.data,
            expiry : res.expiry,
            mrp : res.mrp,
            packof : res.packof
        }
        setProduct(obj);
    });
 
  }
  return (
    <div className="customer_container">
        <h2>Scan QR in the Camera</h2>
    <div className=".vdo__container">
        <QrReader

            onResult={(result, error) => {
            if (!!result) {
                setId(result?.text);
            }

            if (!!error) {
                console.info(error);
            }
            }}
            // style={{ width: '200px', height:'200px' }}
        />
    <p className='product_text'>Product ID: {id}</p>
    <button onClick={fetchData}>Get Details</button>
    <p>
        <span>Name : {product.name}</span>
        <span>Manu. Date : {product.man_date}</span>
        <span>Expiry : {product.expiry}</span>
        <span>MRP: {product.mrp}</span>
        <span>In Pack of : {product.packof}</span>
    </p>
    </div>
        </div>
  );
};

export default Customer;