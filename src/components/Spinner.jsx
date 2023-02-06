import React from "react";
import "../assets/css/spinner.css";

function Spinner() {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}
export default Spinner;
