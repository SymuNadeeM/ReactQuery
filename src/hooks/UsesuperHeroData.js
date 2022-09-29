import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes =(heroID)=>{
  return axios.get(`http://localhost:5000/superheroes/${heroID}`);
}

export const UsesuperHeroData =(heroID)=>{
  return useQuery(['super-heros',heroID],()=>fetchSuperHeroes(heroID) )
}