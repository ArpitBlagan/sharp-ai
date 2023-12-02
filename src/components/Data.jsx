import axios from 'axios';
import { useEffect,useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import Puff from 'react-loading-icons/dist/esm/components/puff';
const Data = () => {
  const [loading,setL]=useState("true");
  const [dat,setD]=useState([]);
  const [cd,setCD]=useState([]);
  const get=async()=>{
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts');
    const val=data.filter((ele,index)=>{return ele.userId==1;});
    setCD([val.length,(data.length-val.length)]);
    console.log(val);
    setD(val);setL(false);
  }
  useEffect(()=>{
    get();
  },[]);
  const val={
    labels:['You','other users'],
    datasets:[{
      data: cd,
      backgroundColor:['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)'],
      borderWidth: 1,
  },],
  } 
  return (
    <div className=''>
      {loading?<div className='flex justify-center items-center w-full h-[600px]'>
        <div><Puff stroke="#000000" strokeOpacity={.125} speed={.75}/></div>
      </div>
      :<div className='mx-[40px] my[10px]'>
          <div className='text-center md:text-[40px]'><h1>Data Of User With ID 1.</h1></div>
          <div className='flex justify-center'>
            <div className='h-[300px]'><Pie data={val}/></div>
          </div>
          {dat.map((ele,index)=>{return <div key={index} className='flex flex-col md:flex-row md:items-center justify-start md:justify-around p-5 my[20px] md:shadow-2xl'>
              <p className='mr-[15px]'>{index+1}.</p> 
              <h2 className='mr-[15px] w-[300px]'><span className='font-bold'>Title:</span> {ele.title}</h2>
              <p className='flex-1'><span className='font-bold'>body:</span>{ele.body}</p>
          </div>})}
      </div>
      }
    </div>
  )
}

export default Data