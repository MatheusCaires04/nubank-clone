import React from "react";
import ModalFormCPF from "./ModalFormCPF";

const Wrapper = () => {
  return (
    <div className="bg-bgWrapper bg-no-repeat bg-cover bg-center h-auto md:h-screen px-4 py-14 md:py-0">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/30" />
      <div className="max-w-[1260px] mx-auto h-full flex flex-col md:flex-row items-center pt-10 md:pt-0 relative z-10">
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-5xl font-bold w-full md:w-[65%]">
            O futuro é a razão que a gente faz planos.
          </h1>
          <p className="text-xl md:text-2xl font-medium mt-5 w-full md:w-[65%]">
            Escolha o futuro. Comece a controlar melhor sua vida financeira com
            o Nubank.
          </p>
        </div>
        <ModalFormCPF />
      </div>
    </div>
  );
};

export default Wrapper;
