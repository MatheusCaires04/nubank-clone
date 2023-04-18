import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const BtnMore2 = (props) => {
  return (
    <Link
      className="text-white text-lg font-medium inline-flex items-center gap-2 mt-10 link_after_2 relative w-max"
      href="/"
    >
      {props.text} <FiArrowUpRight className="text-2xl" />
    </Link>
  );
};

export default BtnMore2;
