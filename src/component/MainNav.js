import React from "react";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <ul>
      <li>
        <Link to="../pages/Intro">네이버</Link>
      </li>
      <li>
        <Link to="../pages/Serive">서비스</Link>
      </li>
      <li>
        <Link to="../pages/Value">가치실현</Link>
      </li>
      <li>
        <Link to="../pages/Promote">홍보</Link>
      </li>
      <li>
        <Link to="../pages/Invest">투자정보</Link>
      </li>
      <li>
        <Link to="../pages/Story">스토리</Link>
      </li>
      <li>
        <Link to="../pages/Employ">채용</Link>
      </li>
    </ul>
  );
};

export default MainNav;
