import React from "react";
import ItemBox from "../components/ItemBox";
import axios from "axios";

export default function Main({ itemShoes, setItemShoes }) {
  const fetchData = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((res) => {
        let newArr = [...itemShoes];
        let newArr1 = newArr.concat(res.data);
        setItemShoes(newArr1);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="main-bg"></div>

      <div className="container-item-wrap">
        {itemShoes.map(function (item, i) {
          return <ItemBox i={i} itemShoes={itemShoes[i]} key={i}></ItemBox>;
        })}
      </div>
      <button onClick={fetchData}>더보기</button>
    </>
  );
}
