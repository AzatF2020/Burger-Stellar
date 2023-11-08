import AppHeader from "./components/AppHeader/AppHeader.tsx";
import Routing from "./routing/Routing.tsx";

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
