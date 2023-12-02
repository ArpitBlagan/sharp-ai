import { useEffect, useState } from 'react';
import db from './Firebase';
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import Puff from 'react-loading-icons/dist/esm/components/puff';
import { motion } from 'framer-motion';
const Transaction = () => {
  const [ll,setLL]=useState(true);
  const [Address,setA]=useState("");
  const [Amount,setAm]=useState("");
  const [data,setDoc]=useState([]);
  const [e1,setE1]=useState(false);
  const [e2,setE2]=useState(false);
  const [ff,setff]=useState(false);
  const get=async()=>{
    console.log("working")
    const querySnapshot = await getDocs(collection(db,"History"));
    let arr=[];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arr.push({id:doc.id,address:doc.data().address,amount:doc.data().amount});
  });
  console.log("arr",arr);
  setDoc(arr);console.log("data",data);setLL(false);
  }
  const add=async()=>{setLL(true);
    await addDoc(collection(db,"History"), {
      address:Address,
      amount:Amount
    });setff(false);get();
  }
  useEffect(()=>{
    get();
  },[])
  return (
    <div>
      <div>
        <div className='font-thin text-[50px] text-center'>Pay using Ethereum</div>
        <form className='flex flex-col items-center gap-3'>
          <div className='flex flex-col  '>
          <label className='font-thin md:text-xl'>Address</label>
          <input
            className='w-[350px] h-[50px] border-gray-400 border-[3px] rounded-md pl-[10px]'
           value={Address} onChange={(e)=>{setA(e.target.value)}} placeholder="enter the valid address (0x...)"/>
           {e1&&<p className='font-thin text-red-500'>Invalid Syntax which is address should start with "0x.."</p>}
           </div>
           <div className='flex flex-col '>
          <label className='font-thin md:text-xl'>Amount</label>
          <input
            className='w-[350px] h-[50px] border-gray-400 border-[3px] rounded-md pl-[10px]'
           value={Amount} onChange={(e)=>{setAm(e.target.value)}} placeholder="enter amount between this range [0-10,000]"/>
           {e2&&<p className='font-thin text-red-500'>Amount should be in range [1,10000]</p>}
           </div>
           <div>
            <motion.button
              onClick={(e)=>{
                e.preventDefault();
                if(Amount<=0||Amount>10000){
                  setE2(true);return;
                }else{setE2(false);}
                if(!Address.startsWith("0x")){
                  setE1(true);return;
                }else{setE1(false);}
                setff(true);
                add();
                setA("");setAm("");
              }}
              whileHover={{scale:1.2}} 
              className='text-white hover:text-black hover:bg-white bg-black px-10 py-5 rounded-xl font-thin'>{ff?<Puff stroke="#000000" strokeOpacity={.125} speed={.75}/>:"PAY"}</motion.button>
           </div>
        </form>
      </div>
      <div>
        <div className='text-center font-thin text-[50px]'>Transaction History</div>
        <div className='flex flex-col'>
        {ll?<div className='flex justify-center '><Puff stroke="#000000" strokeOpacity={.125} speed={.75}/></div>:
          <div className='flex flex-col mx-[12px] md:mx-[100px]'>
          <div className='flex justify-between my-[5px]'>
            <div>No.</div>
            <div className=''>Address</div>
            <div className='' >Amount</div>
          </div>
            {data?.map((ele,index)=>{return <motion.div whileHover={{
              scale:1.2
            }}
             key={index} className='flex justify-between shadow-2xl p-[20px] my-[5px]'>
            <div>{index+1}.</div>
            <div >{ele.address}</div>
            <div>{ele.amount}</div></motion.div>})}
          </div>
        }</div>
      </div>
    </div>
  )
}

export default Transaction