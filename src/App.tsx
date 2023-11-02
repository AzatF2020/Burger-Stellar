import AppHeader from "./components/AppHeader/AppHeader.tsx";
import {fetchIngredients} from "./services/thunks/fetchIngredients.ts";
import {useEffect} from "react";
import {useAppDispatch} from "./services/hooks.ts";
import Routing from "./routing/Routing.tsx";
import {userThunk} from "./services/thunks/userThunk.ts";

function App() {
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
