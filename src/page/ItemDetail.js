import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetail({ itemShoes }) {
  let { id } = useParams();
  let [bannerSwich, setBannerSwich] = useState(true);
  let [inputTxt, setInputTxt] = useState();

  useEffect(() => {
    let bannerTime = setTimeout(() => {
      setBannerSwich(false);
    }, 2000);

    return () => {
      clearTimeout(bannerTime);
    };
  }, []);

  useEffect(() => {
    if (isNaN(inputTxt) == true) {
      alert("숫자만 입력하세요");
    }
  }, [inputTxt]);

  let returnValue = itemShoes.find((data) => {
    return data.id == id;
  });

  return (
    <>
      {bannerSwich ? (
        <div className="baseBox countBox">2초안에 구매시 할인</div>
      ) : null}
      <div className="detailItem-wrap baseBox">
        <div>
          <img src={returnValue.img} alt="아이템상세이미지" width="100%" />
        </div>
        <input
          type="text"
          onChange={(e) => {
            setInputTxt(e.target.value);
          }}
        />
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
