import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";

import apple from "../../../public/assets/apple.svg";
import android from "../../../public/assets/android.svg";

const ListFooter = () => {
  return (
    <ul className="max-w-[1260px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-16 px-6">
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">Nubank</span>
        <Link href="/" className="links_footer">
          Sobre Nós
        </Link>
        <Link href="/" className="links_footer">
          Carreiras
        </Link>
        <Link href="/" className="links_footer">
          Perguntas Frequentes
        </Link>
        <Link href="/" className="links_footer">
          Contato
        </Link>
        <Link href="/" className="links_footer">
          Imprensa
        </Link>
        <Link href="/" className="links_footer">
          Nu Impacto <FiArrowUpRight className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          Investidores <FiArrowUpRight className="text-xl" />
        </Link>
      </li>
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">Produtos</span>
        <Link href="/" className="links_footer">
          Conta Digital
        </Link>
        <Link href="/" className="links_footer">
          Cartão de Crédito
        </Link>
        <Link href="/" className="links_footer">
          Nubank Ultravioleta
        </Link>
        <Link href="/" className="links_footer">
          Função Construir Limite
        </Link>
        <Link href="/" className="links_footer">
          Empréstimo
        </Link>
        <Link href="/" className="links_footer">
          Conta PJ
        </Link>
        <Link href="/" className="links_footer">
          Cartão de Crédito PJ
        </Link>
        <Link href="/" className="links_footer">
          Nubank Vida
        </Link>
        <Link href="/" className="links_footer">
          Invetimentos
        </Link>
      </li>
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">Explore</span>
        <Link href="/" className="links_footer">
          Comunidade <FiArrowUpRight className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          Blog <FiArrowUpRight className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          InvestNews <FiArrowUpRight className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          Newsletter <FiArrowUpRight className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          México <FiArrowUpRight className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          Argentina <FiArrowUpRight className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          Colômbia <FiArrowUpRight className="text-xl" />
        </Link>
      </li>
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">
          Veja também
        </span>
        <Link href="/" className="links_footer">
          Auxilio emergencial e FGTS <MdArrowRightAlt className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          Tudo sobre o Pix <MdArrowRightAlt className="text-xl" />
        </Link>
        <Link href="/" className="links_footer">
          Fornecedores <MdArrowRightAlt className="text-xl" />
        </Link>
      </li>
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">
          Transparência
        </span>
        <Link href="/" className="links_footer">
          Política de privacidade
        </Link>
        <Link href="/" className="links_footer">
          Política de compliance
        </Link>
        <Link href="/" className="links_footer">
          Política de segurança
        </Link>
        <Link href="/" className="links_footer">
          Contratos
        </Link>
        <Link href="/" className="links_footer">
          Relatórios financeiros
        </Link>
        <Link href="/" className="links_footer">
          Ética e compliance
        </Link>
        <Link href="/" className="links_footer">
          Dados abertos
        </Link>
        <Link href="/" className="links_footer">
          SCR
        </Link>
        <Link href="/" className="links_footer">
          Convenção de boletos
        </Link>
      </li>
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">Ouvidoria</span>
        <Link href="/" className="links_footer">
          0800 887 0463
        </Link>
        <Link href="/" className="links_footer">
          ouvidoria@nubank.com.br
        </Link>
        <Link
          href="/"
          className="links_footer text-sm sm:text-base font-medium"
        >
          Atendimento das 9h às 18h (dias úteis)
        </Link>
      </li>
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">
          Fale com a gente
        </span>
        <Link href="/" className="links_footer">
          0800 608 6236
        </Link>
        <Link href="/" className="links_footer">
          meajuda@nubank.com.br
        </Link>
        <Link href="/" className="links_footer font-medium">
          Canal de atendimento em libras
        </Link>
        <Link href="/" className="links_footer font-medium">
          Atendimento 24h
        </Link>
      </li>
      <li className="flex flex-col text-base sm:text-lg font-bold gap-1">
        <span className="font-normal text-base sm:text-lg mb-5">
          Baixe o app
        </span>
        <Link href="/" className="links_footer">
          <Image src={apple} alt="/" />
        </Link>
        <Link href="/" className="links_footer">
          <Image src={android} alt="/" />
        </Link>
      </li>
    </ul>
  );
};

export default ListFooter;
