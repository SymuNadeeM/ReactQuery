import axios from 'axios';
import { useQuery } from 'react-query';
const fetchSuperHeroes =()=>{
  return axios.get("http://localhost:5000/superheroes");
}

export const useSuperHeroesData=(onSuccess,onError)=>{
 return useQuery("super-heros",fetchSuperHeroes,{onSuccess,onError})
}