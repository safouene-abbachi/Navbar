import React from "react";
import Navitem from "./component/navitem";

const Navitem = props =>
  props.lastSub.map((sub, i) => (
    <li key={i}>
      <a href={sub.link}>{sub.title}</a>
    </li>
  ));

export default Navitem;
