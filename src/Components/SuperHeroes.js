import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SuperHeroes = () => {
    const [loading,setLoading]=useState(true)
    const [sdata,setSdata]=useState([])
    const [error,seterror]= useState('')

    useEffect(()=>{
       
      axios.get("http://localhost:5000/superheroes")
      .then((res)=>{
        setLoading(false)
        setSdata(res.data)
      })
    .catch((err)=>{
      seterror(err);
      setLoading(false)
    })
    },[])

    if(loading){
      return <div>Loading....</div>
    }

    if(error){
      return <div>{error.message}</div>
    }


  return (
    <div>
        <h1>Super Heroes</h1>
        {sdata.map((item)=>{
          return <div>{item.name}</div>
        })}
    </div>
  );
};

export default SuperHeroes;