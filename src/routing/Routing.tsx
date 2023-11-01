import {Routes, Route, useLocation} from "react-router-dom";
import {Home, Orders, HomeIngredientDetail, Register} from "../pages";

const Routing = () => {
  const location = useLocation()
  let state = location.state && {backgroundLocation: Location}

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route index path={"/"} element={<Home/>}/>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
        <Route path={"/orders"} element={<Orders/>}/>

        {/* #NOTE: Authorization */}
        <Route path={"/register"} element={<Register/>}/>

      </Routes>

      {state?.backgroundLocation && (<Routes>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
      </Routes>)}
    </>
  );
};

export default Routing;
