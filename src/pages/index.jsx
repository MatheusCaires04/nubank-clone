import React from "react";
import Link from "next/link";
import Image from "next/image";

import Sections from "@/components/home/Sections";
import Wrapper from "@/components/home/Wrapper";
import BtnMore from "@/components/home/btnMore";
import SectionsSecond from "@/components/home/SectionsSecond";
import BtnMore2 from "@/components/home/BtnMore2";

import image1 from "../../public/assets/image1.webp";
import image2 from "../../public/assets/image2.webp";
import image3 from "../../public/assets/image3.webp";
import image4 from "../../public/assets/image4.webp";
import image6_desktop from "../../public/assets/image6-desktop.webp";
import image6_mobile from "../../public/assets/image6-mobile.webp";
import image7_desktop from "../../public/assets/image7-desktop.webp";
import image7_mobile from "../../public/assets/image7-mobile.webp";
import image5_desktop from "../../public/assets/image5-desktop.webp";
import image5_mobile from "../../public/assets/image5-mobile.webp";

export default function Home() {
  return (
    <>
      <Wrapper />
      <Sections background="bg-white">
        <div className="flex flex-col justify-center">
          <Link
            href="/"
            className="text-violet text-4xl md:text-6xl font-bold hover:underline"
          >
            Conheça nosso Cartão de Crédito
          </Link>
          <p className="text-2xl md:text-4xl font-semibold mt-2 mb-6">
            Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno,
            gratuito e prático também.
          </p>
          <div className="flex items-center">
            <BtnMore color="text-violet" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={image1} alt="" />
        </div>
      </Sections>
      <Sections background="bg-bgSection">
        <div className="flex flex-col justify-center">
          <Link
            href="/"
            className="text-violet text-4xl md:text-6xl font-bold hover:underline"
          >
            Nubank Ultravioleta
          </Link>
          <p className="text-2xl md:text-4xl font-semibold mt-2 mb-6">
            O cartão de crédito premium para você viver todas as suas escolhas.
          </p>
          <div className="flex items-center">
            <BtnMore color="text-violet" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={image2} alt="" />
        </div>
      </Sections>
      <Sections background="bg-white">
        <div className="flex flex-col justify-center">
          <Link
            href="/"
            className="text-violet text-4xl md:text-6xl font-bold hover:underline"
          >
            Conta do Nubank
          </Link>
          <p className="text-2xl md:text-4xl font-semibold mt-2 mb-6">
            A conta que vai levar você ao controle da sua vida financeira.
          </p>
          <div className="flex items-center">
            <BtnMore color="text-violet" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={image3} alt="" className="w-[30%] md:w-[50%]" />
        </div>
      </Sections>
      <Sections background="bg-violet">
        <div className="flex flex-col justify-center">
          <Link
            href="/"
            className="text-white text-4xl md:text-6xl font-bold hover:underline"
          >
            Conta PJ
          </Link>
          <p className="text-2xl md:text-4xl font-semibold mt-2 mb-6 text-white/60">
            Controle o seu negócio com suporte humano de verdade.
          </p>
          <div className="flex items-center">
            <BtnMore color="text-white" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={image4} alt="" className="w-[50%] md:w-[70%]" />
        </div>
      </Sections>
      <SectionsSecond bgDesktop={image6_desktop} bgMobile={image6_mobile}>
        <p className="text-white text-3xl sm:text-5xl w-full sm:w-[600px] font-bold leading-[2.6rem] sm:leading-[3.8rem]">
          Nós acreditamos que só uma pessoa pode ter controle sobre sua vida
          financeira: você.
        </p>
        <BtnMore2 text="Saiba mais sobre como fazemos isso" />
      </SectionsSecond>
      <SectionsSecond bgDesktop={image7_desktop} bgMobile={image7_mobile}>
        <p className="text-white text-3xl sm:text-5xl w-full sm:w-[600px] font-bold leading-[2.6rem] sm:leading-[3.8rem]">
          NuCommunity A comunidade oficial do Nubank para você tirar dúvidas e
          compartilhar ideias.
        </p>
        <BtnMore2 text="Faça parte" />
      </SectionsSecond>
      <SectionsSecond bgDesktop={image5_desktop} bgMobile={image5_mobile}>
        <p className="text-white text-3xl sm:text-5xl w-full sm:w-[600px] font-bold leading-[2.6rem] sm:leading-[3.8rem]">
          Conheça nossa central de informações em caso de emergências.
        </p>
        <BtnMore2 text="Conheça o SOS Nu" />
      </SectionsSecond>
    </>
  );
}
