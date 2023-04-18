import Link from "next/link";
import React, { useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { MdOutlineLogin } from "react-icons/md";

const NavHeaderMobile = () => {
  const [subLink, setSubLink] = useState(false);

  return (
    <nav className="flex-1 flex lg:hidden font-medium text-base text-textNAv fixed h-auto bg-white left-0 top-14 right-0 bottom-0 flex-col duration-300 overflow-y-auto">
      <Link
        href="/"
        className="links-2 border-b-2 border-black/30 cursor-pointer"
      >
        Página Inicial
      </Link>
      <Link
        href="/"
        onClick={() => setSubLink(!subLink)}
        className={`${
          subLink ? "border-none" : "border-b-2"
        } links-2 border-black/30 gap-1`}
      >
        Para você <BiChevronRight className={`${subLink && "active"}`} />
      </Link>
      <ul
        className={`${
          !subLink ? "h-0 hidden" : "h-auto"
        } px-6 pb-5 grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2 border-black/30`}
      >
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Nubank</span>
          <Link href="/" className="sub_link_2">
            Conta do Nubank
          </Link>
          <Link href="/" className="sub_link_2">
            Cartão de crédito
          </Link>
          <Link href="/" className="sub_link_2">
            Função Construir Limite <span>novo</span>
          </Link>
          <Link href="/" className="sub_link_2">
            Tudo sobre Pix
          </Link>
        </li>
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Nubank Ultravioleta</span>
          <Link href="/" className="sub_link_2">
            Cartão de crédito <span>novo</span>
          </Link>
        </li>
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Nubank Seguros</span>
          <Link href="/" className="sub_link_2">
            Seguro de Vida
          </Link>
          <Link href="/" className="sub_link_2">
            Seguro de Celular <span>novo</span>
          </Link>
        </li>
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Outros Produtos</span>
          <Link href="/" className="sub_link_2">
            Empréstimo Pessoal
          </Link>
          <Link href="/" className="sub_link_2">
            Investimentos <span>novo</span>
          </Link>
        </li>
      </ul>
      <Link
        href="/"
        onClick={() => setSubLink(!subLink)}
        className={`${
          subLink ? "border-none" : "border-b-2"
        } links-2 border-black/30 gap-1`}
      >
        Para seu negócio <BiChevronRight />
      </Link>
      <ul
        className={`${
          !subLink ? "h-0 hidden" : "h-auto"
        } px-6 pb-5 grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2 border-black/30`}
      >
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Nubank PJ</span>
          <Link href="/" className="sub_link_2">
            Conta PJ
          </Link>
          <Link href="/" className="sub_link_2">
            Cartão de crédito PJ <span>novo</span>
          </Link>
        </li>
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Pagamentos</span>
          <Link href="/" className="sub_link_2">
            NuTap <span>novo</span>
          </Link>
        </li>
      </ul>
      <Link
        href="/"
        onClick={() => setSubLink(!subLink)}
        className={`${
          subLink ? "border-none" : "border-b-2"
        } links-2 border-black/30 gap-1`}
      >
        O Nubank <BiChevronRight />
      </Link>
      <ul
        className={`${
          !subLink ? "h-0 hidden" : "h-auto"
        } px-6 pb-5 grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2 border-black/30`}
      >
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Sobre nós</span>
          <Link href="/" className="sub_link_2">
            Sobre o Nu
          </Link>
          <Link href="/" className="sub_link_2">
            Sala de imprensa
          </Link>
          <Link href="/" className="sub_link_2">
            Carreiras
          </Link>
          <Link href="/" className="sub_link_2">
            Nu Impacto
          </Link>
          <Link href="/" className="sub_link_2">
            Investidores
          </Link>
        </li>
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Outros canais</span>
          <Link href="/" className="sub_link_2">
            Blog
          </Link>
          <Link href="/" className="sub_link_2">
            Newsletter
          </Link>
          <Link href="/" className="sub_link_2">
            Comunidade
          </Link>
          <Link href="/" className="sub_link_2">
            InvestNews
          </Link>
        </li>
        <li className="flex flex-col gap-2">
          <span className="font-normal text-lg mb-3">Nubank pelo mundo</span>
          <Link href="/" className="sub_link_2">
            México
          </Link>
          <Link href="/" className="sub_link_2">
            Colômbia
          </Link>
          <Link href="/" className="sub_link_2">
            Argentina
          </Link>
          <Link href="/" className="sub_link_2">
            Nu Internacional
          </Link>
        </li>
      </ul>
      <Link
        href="/"
        className="links-2 cursor-pointer border-b-2 border-black/30"
      >
        Perguntas
      </Link>
      <Link href="/" className="links-2 links-2-svg justify-normal gap-1">
        Login
        <MdOutlineLogin className="text-2xl" />
      </Link>
    </nav>
  );
};

export default NavHeaderMobile;
