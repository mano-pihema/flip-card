import { Route, createRoutesFromElements } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import AddCard from "./components/AddCard";


export const routes = createRoutesFromElements(
  <Route element={<App/>}>
    <Route index element = {<Home/>}/>
    <Route path="/Add" element = { <AddCard/> }/>

  </Route>
)