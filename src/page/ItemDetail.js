import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetail({ itemShoes }) {
  let { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      let temp = document
        .querySelector("div.countBox")
        .classList.add("countBoxClose");
    }, 2000);
  });

  let returnValue = itemShoes.find((data) => {
    return data.id == id;
  });

  return (
    <>
      <div className="baseBox countBox">2초안에 구매시 할인</div>
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
    </>
  );
}
