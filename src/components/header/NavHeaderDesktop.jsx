import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const NavHeaderDesktop = () => {
  return (
    <nav className="hidden nav_header flex-1 lg:flex gap-6 font-medium text-base text-textNAv">
      <Link href="/" className="links cursor-pointer">
        Página Inicial
      </Link>
      <div className="link_dropdown">
        <Link href="/" className="links gap-1">
          Para você <BiChevronRight />
        </Link>
        <div className="dropdown_1">
          <ul className="max-w-[1260px] mx-auto grid grid-cols-4">
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
              <span className="font-normal text-lg mb-3">
                Nubank Ultravioleta
              </span>
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
        </div>
      </div>

      <div className="link_dropdown">
        <Link href="/" className="links gap-1">
          Para seu negócio <BiChevronRight />
        </Link>
        <div className="dropdown_2">
          <ul className="max-w-[1260px] mx-auto grid grid-cols-2 w-full">
            <li className="flex flex-col gap-2 w-full">
              <span className="font-normal text-lg mb-3">Nubank PJ</span>
              <Link href="/" className="sub_link_2">
                Conta PJ
              </Link>
              <Link href="/" className="sub_link_2">
                Cartão de crédito PJ <span>novo</span>
              </Link>
            </li>
            <li className="flex flex-col gap-2 w-full">
              <span className="font-normal text-lg mb-3">Pagamentos</span>
              <Link href="/" className="sub_link_2">
                NuTap <span>novo</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="link_dropdown">
        <Link href="/" className="links gap-1">
          O Nubank <BiChevronRight />
        </Link>
        <div className="dropdown_3">
          <ul className="max-w-[1260px] mx-auto grid grid-cols-3 w-full">
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
              <span className="font-normal text-lg mb-3">
                Nubank pelo mundo
              </span>
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
        </div>
      </div>

      <Link href="/" className="links cursor-pointer">
        Perguntas
      </Link>
    </nav>
  );
};

export default NavHeaderDesktop;
