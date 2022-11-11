import React from "react";
import NavButton from "./NavButton";

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <NavButton phase={"I"} />
        <NavButton phase={"II"} />
        <NavButton phase={"III"} />
        <NavButton phase={"IV"} />
        <NavButton phase={"V"} />
      </div>
    </nav>
  );
}

export default Navigation;
