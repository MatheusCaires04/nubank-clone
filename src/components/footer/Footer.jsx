import React from "react";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";

import ListFooter from "./ListFooter";

import logo from "../../../public/assets/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="bg-textNAv text-white">
      <ListFooter />
      <div className="w-full py-10 px-6 border-y-2 border-white/10">
        <div className="max-w-[1260px] mx-auto flex flex-col sm:flex-row items-start gap-10">
          <Image src={logo} alt="logo da Nubank" />
          <div className="flex-1 text-lg">
            <p>
              © 2023 Nu Pagamentos S.A - Instituição de Pagamento.
              18.236.120/0001-58
            </p>
            <p> Rua Capote Valente, 39 - São Paulo, SP - 05409-000</p>
          </div>
          <div className="flex items-center gap-4 text-xl sm:text-2xl">
            <Link href="/" className="hover:text-violet duration-150">
              <AiFillLinkedin />
            </Link>
            <Link href="/" className="hover:text-violet duration-150">
              <AiFillYoutube />
            </Link>
            <Link href="/" className="hover:text-violet duration-150">
              <AiFillFacebook />
            </Link>
            <Link href="/" className="hover:text-violet duration-150">
              <AiFillInstagram />
            </Link>
            <Link href="/" className="hover:text-violet duration-150">
              <AiFillTwitterSquare />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1260px] mx-auto py-10 px-6 md:px-0 flex items-center justify-center sm:justify-end gap-10">
        <div className="flex items-center gap-1 text-lg font-medium">
          <input
            type="radio"
            name="language"
            id="pt"
            checked
            className="appearance-none border-2 border-white w-5 h-5 rounded-full checked:bg-gradient-radial"
          />
          <label htmlFor="pt">Português</label>
        </div>
        <div className="flex items-center gap-1 text-lg font-medium">
          <input
            type="radio"
            name="language"
            id="en"
            className="appearance-none border-2 border-white w-5 h-5 rounded-full checked:bg-gradient-radial"
          />
          <label htmlFor="en">English</label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
