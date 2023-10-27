import {Routes, Route} from "react-router-dom";
import {Home, Orders} from "./pages";
import AppHeader from "./components/AppHeader/AppHeader.tsx";

function App() {
  return (
    <>
      <AppHeader/>
      <main>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/orders"} element={<Orders/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
