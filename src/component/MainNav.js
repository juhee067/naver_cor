import React from "react";
import { NavLink } from "react-router-dom";
const GNB = [
  { id: 1, content: "네이버", link: "./pages/Intro" },
  { id: 2, content: "서비스", link: "./pages/Serive" },
  { id: 3, content: "가치실현", link: "./pages/Value" },
  { id: 4, content: "홍보", link: "./pages/Promote" },
  { id: 5, content: "투자정보", link: "./pages/Invest" },
  { id: 6, content: "스토리", link: "./pages/Story" },
  { id: 7, content: "채용", link: "./pages/Employ" },
];
const MainNav = () => {
  return (
    <ul>
      {GNB.map((it, idx) => {
        return (
          <li key={idx}>
            <NavLink to={it.link}>{it.content}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MainNav;
