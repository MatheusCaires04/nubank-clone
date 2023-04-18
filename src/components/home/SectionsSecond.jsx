import Image from "next/image";
import React from "react";

const SectionsSecond = (props) => {
  return (
    <section className="w-full min-h-[680px] px-6 relative flex items-center">
      <Image
        src={props?.bgDesktop}
        alt=""
        className="hidden md:flex w-full h-full absolute top-0 left-0 right-0 bottom-0"
      />
      <Image
        src={props?.bgMobile}
        alt=""
        className="md:hidden absolute top-0 left-0 bottom-0 right-0 w-full h-full"
      />
      <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col h-full w-full">
        {props.children}
      </div>
    </section>
  );
};

export default SectionsSecond;
