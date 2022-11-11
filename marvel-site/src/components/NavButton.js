import React from "react";

function NavButton(props) {
  let idName = `#${props.phase}`;

  return (
    <a href={idName}>
      <button>{props.phase}</button>
    </a>
  );
}

export default NavButton;
