
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Customer = (props) => {
  const [data, setData] = useState('No result');

  return (
    <div className="customer_container">
        <h2>Scan QR in the Camera</h2>
    <div className=".vdo__container">
        <QrReader

            onResult={(result, error) => {
            if (!!result) {
                setData(result?.text);
            }

            if (!!error) {
                console.info(error);
            }
            }}
            // style={{ width: '200px', height:'200px' }}
        />
    <p className='product_text'>Product ID: {data}</p>

    </div>
        </div>
  );
};

export default Customer;