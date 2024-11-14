import { Route, BrowserRouter } from "react-router-dom";


// import Home from "./Home";
import Doados from "./Components/Doados/Doados";
import QueroDoar from "./Components/Quero_Doar/QueroDoar";



const Routes = () => {
   return(
       <BrowserRouter>
           {/* <Route component = { Inicio }  path="/" exact /> */}
           <Route path="./Components/Doados/Doados.jsx"  element={<Doados/>} />
           <Route path="./Components/Quero_Doar/QueroDoar.jsx"  element={<QueroDoar/>} />
       </BrowserRouter>
   )
}

export default Routes;