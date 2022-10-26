import { useState } from "react";
import "./App.css";
import itemData from "./data/data";
// page
import Main from "./page/Main";
import ItemDetail from "./page/ItemDetail";
import Event from "./page/Event/Event";
import EventOne from "./page/Event/EventOne";
import EventTwo from "./page/Event/EventTwo";
// --
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  let [itemShoes] = useState(itemData);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main itemShoes={itemShoes} />} />

        <Route
          path="/itemDetail/:id"
          element={<ItemDetail itemShoes={itemShoes} />}
        />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<EventOne />} />
          <Route path="two" element={<EventTwo />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
