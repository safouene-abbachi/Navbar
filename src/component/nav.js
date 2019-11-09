import React from "react";

const Mynavbar = props =>
  props.lastMenu.map((item, i) => (
    <li className="choices" key={i}>
      <a href={item.submenu}>{item.title}</a>
      <ul
        className="sub_menu"
        style={item.submenu.length ? {} : { display: "none" }}
      >
        {item.submenu.map(el => (
          <li>
            <a href={el.link}>{el.title}</a>
          </li>
        ))}
      </ul>
    </li>
  ));

export default Mynavbar;
