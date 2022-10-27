import React from "react";

export default function ItemBox({ i, itemShoes, key }) {
  return (
    <div className="baseBox itemBox">
      <img src={itemShoes[i].img} alt="신발사진" width="60%" />
      <h4>{itemShoes[i].title}</h4>
      <p>{itemShoes[i].content}</p>
      <span>{itemShoes[i].price}</span>
    </div>
  );
}
