import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const BtnMore = (props) => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-lg font-medium relative link_after ${props?.color}`}
    >
      Saiba mais <MdArrowRightAlt />
    </Link>
  );
};

export default BtnMore;
