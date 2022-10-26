import React from "react";
import { Outlet } from "react-router-dom";

export default function Event() {
  return (
    <div>
      이벤트 페이지 입니다.
      <Outlet></Outlet>
    </div>
  );
}
