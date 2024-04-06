import React, { useState } from "react";

function Form({ newLocation }) {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    if (city === "" || !city) return console.log('MAL TIPEADO');

    newLocation(city);
  };

  return (
    <section className="text-zinc-50 body-font font-bold">
      <form onSubmit={onSubmit}>
        <div className="container mx-auto flex flex-col px-5 py-10 -mb-36 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-zinc-50">
            Predicción meteorológica
            </h1>
            <p className="mb-8 leading-relaxed text-yellow-500">
            Ingresa la ciudad de tu país para saber el tiempo del mismo
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="Ciudad"
                  className="w-full bg-zinc-900 bg-opacity-50 rounded focus:ring-2 focus:ring-yellow-200 focus:bg-gray-800 border border-zinc-50 focus:border-yellow-500 text-base outline-none text-zinc-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="inline-flex text-zinc-50 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-base lg:text-lg"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
