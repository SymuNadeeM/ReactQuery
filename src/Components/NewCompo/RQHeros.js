import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

// for two::
// const fetchingHero = ()=>{
//   return axios.get("http://localhost:5000/superheroes")
// }

const RQHeros = () => {

  // ONE way

  const { isLoading, data} = useQuery("newHero",()=>{
    return axios.get("http://localhost:5000/superheroes")
  })
 
  if(isLoading){
    return <div>Loading...</div>
  }

// two way
  // const { isLoading, data} = useQuery("newHero", fetchingHero)
  // if(isLoading){
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      New RQ Data
      {data?.data.map((item)=>(
        <div key={item.id}>
           <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default RQHeros;