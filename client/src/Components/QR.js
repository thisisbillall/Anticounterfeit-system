import QRCode  from "qrcode";
import { useEffect, useState } from "react";
const QR=({id,name})=>{
    const [src, setSrc] = useState('');
    useEffect(()=>{
        QRCode.toDataURL(id).then(setSrc);
    },[])
    return(
        <>
            <h1>QR for {name}</h1>
            <img className="qr_img" src={src}/>
        </>
    )
}
export default QR;