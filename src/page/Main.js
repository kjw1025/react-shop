import React from "react";
import ItemBox from "../components/ItemBox";

export default function Main({ itemShoes }) {
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
