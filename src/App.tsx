import {Routes, Route} from "react-router-dom";
import {Home, Orders} from "./pages";
import AppHeader from "./components/AppHeader/AppHeader.tsx";
import {fetchIngredients} from "./services/thunks/fetchIngredients.ts";
import {useEffect} from "react";
import {useAppDispatch} from "./services/hooks.ts";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchIngredients())
  }, [dispatch]);

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
