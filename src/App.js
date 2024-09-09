import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import RQHeros from "./Components/NewCompo/RQHeros";
import RQISupperheroesPage from "./Components/RQISupperheroes.Page";
import RQSuperHeros from "./Components/RQSuperHeros";
import SuperHeroes from "./Components/SuperHeroes";
import Pagging from "./Paggination/Pagging";



const queryClient = new  QueryClient()

function App() {
  return (
   <>
      <QueryClientProvider client={queryClient}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-hero">Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-hero">RQ super heroes</Link>
            </li>
            <li>
              <Link to="/rq-pagging">Pagging</Link>
            </li>
            <li><Link to="/new-rq-hero">New RQ hero</Link></li>
          </ul>
        </nav>                
        <Routes>
          <Route path="/rq-pagging" element={<Pagging />} />
          <Route path="/rq-super-hero/:heroID" element={<RQISupperheroesPage/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/super-hero"  element={<SuperHeroes/>} />
          <Route path="/rq-super-hero" element={<RQSuperHeros/>} />         
          <Route path="/new-rq-hero" element={<RQHeros/>} />         
        </Routes>   
        <ReactQueryDevtools initiallsOpem={false} position="bottom-right" />   
        </QueryClientProvider>
   </>
  );
}

export default App;
