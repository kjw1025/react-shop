import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { upDateList } from "./../store/state/cartList";

export default function ItemDetail({ itemShoes }) {
  let { id } = useParams();
  let [bannerSwich, setBannerSwich] = useState(true);
  let [tapMenu, setTapMenu] = useState(0);
  let [ani, setAni] = useState("");

  // redux
  let dispatch = useDispatch();

  useEffect(() => {
    let bannerTime = setTimeout(() => {
      setBannerSwich(false);
    }, 2000);

    return () => {
      clearTimeout(bannerTime);
    };
  }, []);

  useEffect(() => {
    setAni("fade");
  }, [id]);

  let returnValue = itemShoes.find((data) => {
    return data.id == id;
  });

  function TapContent({ tapMenu }) {
    let [newAni, setNewAni] = useState("");
    useEffect(() => {
      setNewAni("fade");
    }, [tapMenu]);
    let temp = [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tapMenu];
    return <div className={newAni}>{temp}</div>;
  }

  const orderGo = () => {
    let x = returnValue;
    dispatch(upDateList(x));
  };

  return (
    <div className={`detail-wrap ${ani}`}>
      {bannerSwich ? (
        <div className="baseBox countBox">2초안에 구매시 할인</div>
      ) : null}
      <div className="detailItem-wrap baseBox">
        <div className="detailImg">
          <img src={returnValue.img} alt="아이템상세이미지" width="100%" />
        </div>
        <div className="detailItemTxt">
          <h4>{returnValue.title}</h4>
          <p>{returnValue.content}</p>
          <span>{returnValue.price}</span>
          <button className="orderBt" onClick={orderGo}>
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTapMenu(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTapMenu(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTapMenu(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TapContent tapMenu={tapMenu}></TapContent>
    </div>
  );
}
