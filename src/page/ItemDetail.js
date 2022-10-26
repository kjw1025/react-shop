import React from "react";
import { useParams } from "react-router-dom";

export default function ItemDetail({ itemShoes }) {
  let { id } = useParams();

  let returnValue = itemShoes.find(function (data) {
    console.log(data.id);
    console.log(itemShoes[id]);
    // return data.id == itemShoes[id].id;
    return data.id == id;
  });
  console.log(returnValue);

  return (
    <div className="detailItem-wrap baseBox">
      <div>
        <img src={returnValue.img} alt="아이템상세이미지" width="100%" />
      </div>
      <div className="detailItemTxt">
        <h4>{returnValue.title}</h4>
        <p>{returnValue.content}</p>
        <span>{returnValue.price}</span>
        <button className="orderBt">주문하기</button>
      </div>
    </div>
  );
}
