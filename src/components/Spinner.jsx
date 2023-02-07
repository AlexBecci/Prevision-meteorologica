import React from "react";
import "../assets/css/spinner.css";

function Spinner() {
  return (
    <div className="w-full flex items-center justify-center py-48">
    <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12  rounded-3xl">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="lds-ripple container mx-96">
            <div></div>
            <div></div>
          </div>
          <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">
            Cargando...
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Spinner;
