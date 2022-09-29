import React from 'react';
import {UsesuperHeroData} from '../hooks/UsesuperHeroData'
import {useParams} from "react-router-dom"

const RQISupperheroesPage = () => {

  const {heroID} =useParams()
 const {isloading, data, isError, error }= UsesuperHeroData(heroID)

 if(isloading){
  return <div>Loading...l</div>
 }
 if (isError) {
  return <h2>{error.message}</h2>
 }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RQISupperheroesPage;
