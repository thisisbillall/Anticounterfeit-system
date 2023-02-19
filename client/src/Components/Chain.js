import { useState } from "react"
import { fetchDetails } from "../connect";

const Chain =()=>{
    const [prodID, setProdID] = useState(null);
    const [chain, setChain] = useState([]);
    const onTrack = ()=>{
        if(!prodID){
            alert("Enter Id")
            return;
        }
        else{

            fetchDetails(prodID, res =>{
                setChain(res.locations)
                console.log(res.locations);
            });
        }
    }

    return(

        <div>
            <h1>Tracking Product - {prodID}</h1>
            <input className="man_inp" type={"text"} placeholder={"ID"} onChange={(e)=>setProdID(e.target.value)}/>
            <button onClick={onTrack}>Track</button>
            <div className="container">
                {
                    chain.map((curr)=>{
                        return(
                            <ul className="progressbar">
                                <li className="active">{curr}</li>
                            </ul>
                        )
                    })
                }
            </div>

            
        </div>
    )
}

export default Chain