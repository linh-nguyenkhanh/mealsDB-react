import React from "react";
import MealsCard from "./components/MealsCard";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import FavPanel from "./components/FavPanel";
import { useGlobalContext } from "./context.jsx";
function App() {
  const { showModal } = useGlobalContext();
  return (
    <main>
      <NavBar />
      <FavPanel />
      <MealsCard />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
