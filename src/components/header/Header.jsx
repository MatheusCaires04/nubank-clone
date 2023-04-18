import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineLogin } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import NavHeaderDesktop from "./NavHeaderDesktop";
import NavHeaderMobile from "./NavHeaderMobile";

import logo from "../../../public/assets/logo.svg";

const Header = () => {
  const [scrollBtn, setScrollBtn] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const hiddenBtn = () => {
      if (window.scrollY > 200) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    };

    window.addEventListener("scroll", hiddenBtn);
  }, []);

  if (menu) {
    const body = document.querySelector("body");
    body.classList.add("scroll_disable");
  }

  return (
    <header className="fixed bg-white z-[9999] w-full h-14 px-4">
      <div className="max-w-[1260px] mx-auto h-full flex items-center justify-between lg:justify-normal gap-6">
        <Link href="/">
          <Image src={logo} alt="Logo da NUBANK" />
        </Link>
        <NavHeaderDesktop />
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            className="hidden text-lg leading-8 text-violet font-medium lg:flex items-center gap-2 relative duration-200 link_after"
          >
            Login
            <MdOutlineLogin className="text-2xl" />
          </Link>
          {scrollBtn && (
            <Link
              href="/"
              className="text-lg text-white font-medium px-4 py-2 bg-violet hover:bg-violet/90 rounded-full duration-200"
            >
              Quero ser Nubank
            </Link>
          )}
          <div
            className="flex lg:hidden p-2 text-2xl text-violet hover:bg-gray-200 duration-200 rounded-full cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoMdClose /> : <HiMenuAlt4 />}
          </div>
        </div>
      </div>
      {menu && <NavHeaderMobile />}
    </header>
  );
};

export default Header;
