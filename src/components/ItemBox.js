import React from "react";

export default function ItemBox({ itemShoes }) {
  return (
    <div className="baseBox itemBox">
      <img src={itemShoes.img} alt="신발사진" width="60%" />
      <h4>{itemShoes.title}</h4>
      <p>{itemShoes.content}</p>
      <span>{itemShoes.price}</span>
    </div>
  );
}
