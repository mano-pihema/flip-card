import { Route, createRoutesFromElements } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import Game from "./components/Game";
import Learn from "./components/Learn";



export const routes = createRoutesFromElements(
  <Route element={<App/>}>
    <Route index element = {<Home/>}/>
    <Route path="/Cards" element = {<Home/>}/>
    <Route path="/Add" element = { <AddCard edit={false} id = {null} state ={ ()=>null}/> }/>
    <Route path="/Play" element = { <Game/> }/>
    <Route path="/Learn" element = { <Learn/> }/>

  </Route>
)