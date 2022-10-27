import { useState } from "react";
import "./App.css";
import itemData from "./data/data";
import axios from "axios";
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
  let [itemShoes, setItemShoes] = useState(itemData);
  // let [dataL, setDataL] = useState()

  const fetchData = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((res) => {
        let newArr = [...itemShoes];
        // let newArr1 = newArr.push(...res.data);
        let newArr1 = newArr.concat(res.data);
        setItemShoes(newArr1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <NavBar />
      <button onClick={fetchData}>데이터 받아오는 버튼</button>
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
