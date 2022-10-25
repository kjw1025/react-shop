import { useState } from "react";
import "./App.css";
import itemData from "./data/data";
import NavBar from "./components/NavBar";
import ItemBox from "./components/ItemBox";
import { Routes, Route } from "react-router-dom";

function App() {
  let [itemShoes] = useState(itemData);

  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Main itemShoes={itemShoes}></Main>} />
        <Route path="/itemDetail" element={<ItemDetail></ItemDetail>} />
      </Routes>
    </div>
  );
}

function Main({ itemShoes }) {
  return (
    <>
      <div className="main-bg"></div>

      <div className="container-item-wrap">
        {itemShoes.map(function (item, i) {
          return <ItemBox i={i} itemShoes={itemShoes}></ItemBox>;
        })}
      </div>
    </>
  );
}

function ItemDetail() {
  return (
    <>
      <div>
        <img src="" alt="아이템상세이미지" width="100%" />
      </div>
      <div>
        <h4>상품명</h4>
        <p>상품설명</p>
        <span>120000원</span>
        <button>주문하기</button>
      </div>
    </>
  );
}

export default App;
