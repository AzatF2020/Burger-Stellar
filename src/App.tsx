import {Routes, Route} from "react-router-dom";
import {Home, Orders} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/orders"} element={<Orders/>}/>
    </Routes>
  )
}

export default App
