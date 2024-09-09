import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SuperHeroes = () => {
  const [loading, setLoading] = useState(true)
   const [data, setData] = useState([])

   useEffect(()=>{
       axios.get("http://localhost:5000/superheroes")
       .then((res)=>{
        setData(res.data)
        setLoading(false)
       })
   },[])
 
   if(loading){
    return <div>Loading....</div>
   }

  return (
    <div>
        <h1>Traditional Data fetching</h1>
        {data.map((item)=>(
          <div key={item.id}>
              <h3>{item.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default SuperHeroes;