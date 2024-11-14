import { Route, Routes } from "react-router-dom";
import App from "./App";
import Doados from "./Components/Doados/Doados";
import QueroDoar from "./Components/QueroDoar/QueroDoar";

function MainRoutes  ()  {
   return(
       <Routes>
           <Route path="/" element={<App/>} />
           <Route path="/Doados"  element={<Doados/>} />
           <Route path="/QueroDoar"  element={<QueroDoar/>} />
       </Routes>
   );
}

export default MainRoutes;