import React from "react";
import { NavLink } from "react-router-dom";
const GNB = [
  { content: "네이버", link: "/pages/Intro" },
  { content: "서비스", link: "/pages/Serive" },
  { content: "가치실현", link: "/pages/Value" },
  { content: "홍보", link: "/pages/Promote" },
  { content: "투자정보", link: "/pages/Invest" },
  { content: "스토리", link: "/pages/Story" },
  { content: "채용", link: "/pages/Employ" },
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
