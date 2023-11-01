import AppHeader from "./components/AppHeader/AppHeader.tsx";
import {fetchIngredients} from "./services/thunks/fetchIngredients.ts";
import {useEffect} from "react";
import {useAppDispatch} from "./services/hooks.ts";
import Routing from "./routing/Routing.tsx";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchIngredients())
  }, [dispatch]);

  return (
    <>
      <AppHeader/>
      <main>
        <Routing/>
      </main>
    </>
  )
}

export default App
