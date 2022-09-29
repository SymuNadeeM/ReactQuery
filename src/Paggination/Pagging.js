import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

 
const fetchColors =(page)=>{
  return axios.get(`http://localhost:5000/colors?_limit=2&_page=${page}`)
}

const Pagging = () => {
   const [page,setpage] = useState(1)
  const{isloading, data, isError, error} = useQuery(["color",page],()=>fetchColors(page))



  if(isloading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <>
    <div>
      <h2>Paggination</h2>
      {data?.data.map((itemcolor)=>{
        return <div key={itemcolor.id}>
           <h4>{itemcolor.label}</h4>
        </div>
      })}
    </div>
    <button  onClick={()=> setpage((spage)=> spage - 1 )} disabled={setpage === 1} >pre</button>
    <button  onClick={()=> setpage((spage)=> spage + 1 )} disabled={setpage === 4} >Next</button>
    </>
  );
};

export default Pagging;
