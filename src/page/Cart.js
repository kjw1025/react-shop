import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { countUp, deleteList } from "./../store/state/cartList";

export default function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div className="cart-wrap">
      <div>
        {state.cartUser.name}
        {state.cartUser.age} 의 장바구니
      </div>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수량 추가</th>
            <th>목록에서 삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.cartList.map((item, i) => {
            return (
              <tr key={i}>
                <td>{state.cartList[i].id}</td>
                <td>{state.cartList[i].title}</td>
                <td>{state.cartList[i].count}</td>
                <td>
                  <button
                    className="plusBt"
                    onClick={() => {
                      dispatch(countUp(state.cartList[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="deleteBt"
                    onClick={() => {
                      dispatch(deleteList(state.cartList[i].id));
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
