// import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";


// const fetchSuperHeroes =()=>{
//   return axios.get("http://localhost:5000/superheroes");
// }

const RQSuperHeros = () => {
  const onSuccess =(data)=>{
    console.log("after data fetching",data);
  }
  const onError =(error)=>{
    console.log("after encountering error",error);
  }

const{isloading, data, isError, error}=  useSuperHeroesData(onSuccess,onError)
 
 
  

  if(isloading){
    return <h2> Loading...</h2>
  }

  if(isError){
    return <h2> {error.message}</h2>
  }


  return (
    <>
      <h1>RQSuperHeros</h1>
      {data?.data.map((item)=>{
        return <div key={item.name}> 
         <Link to={`/rq-super-hero/${item.id}`} >{item.name}</Link>
         </div>
      })}
     
    </>
  );
};

export default RQSuperHeros;