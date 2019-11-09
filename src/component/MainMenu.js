import React from "react";
import Mynavbar from "./nav";

const menu = [
  {
    title: "Home",
    link: "#",
    submenu: []
  },
  {
    title: "service",
    link: "#",
    submenu: [
      {
        title: "For entrepeneurs",
        link: "#"
      },
      {
        title: "For students",
        link: "#"
      },
      {
        title: "For hobbyists",
        link: "#"
      }
    ]
  },
  {
    title: "Contact",
    link: "#",
    submenu: []
  }
];

const MainMenu = () => (
  <ul className="menu">
    <Mynavbar lastMenu={menu} />
  </ul>
);

export default MainMenu;
