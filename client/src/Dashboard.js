import React ,{useState, useEffect}from 'react'
import Web3 from 'web3'
import { sample_abi } from './abi'

const web3 = new Web3(Web3.givenProvider);
const con_addr = '0xf01518e88Bc0c690FA2aC361CE7F0776d70C3FF8';
const sampleContract = new web3.eth.Contract(sample_abi, con_addr);

const Dashboard = () => {

    const [number, setNumber] = useState("aaa");
    const [getNumber, setGetNumber] = useState("zzz");

  useEffect(()=>{

    console.log(sampleContract);
    getnum();
  },[])

  const getnum = async()=>{
    let res = await sampleContract.methods.get().call();
    setGetNumber(res);
    console.log(res);
  }

  const setnum = async() => {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    const gas = await sampleContract.methods.set(number)
        .estimateGas();
    console.log(gas);
    const result = await sampleContract.methods.set(number).send({
    from: acc,
    gas 
    })
    console.log(result);
  }

  const additem = async() => {
    const accs = await window.ethereum.enable();
    const acc = accs[0];
    const gas = await sampleContract.methods.additem("pls")
        .estimateGas();
    console.log(gas);
    await sampleContract.methods.additem("pls").send({
    from: acc,
    gas 
    })
    console.log("ds");
  }

  return (
    <div>
        <h1>Number: {getNumber}</h1>
        <label>INput num to set: </label>
        <input type='text' onChange={e=>setNumber(e.target.value)}/>
        <button onClick={additem}>Add Item</button>
        <button onClick={getnum}>Get NUm</button>
        <button onClick={setnum}>Set NUm</button>

    </div>
  )
}

export default Dashboard