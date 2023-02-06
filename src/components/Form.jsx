import React, { useState } from "react";

function Form({newLocation}) {
  const [city, setCity] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(city);
    if(city === ""|| !city) return;

    newLocation(city);
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3 mx-auto">
          <input
            type="text"
            placeholder="Ciudad"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <button className="border-2 bg-blue-400" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
