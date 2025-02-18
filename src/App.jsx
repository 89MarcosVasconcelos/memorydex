import { Header } from "./components/Header";
import { Game } from "./pages/Game";
import { Ranking } from "./pages/Ranking";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Game />
      <Ranking />
    </>
  );
}

export default App;
