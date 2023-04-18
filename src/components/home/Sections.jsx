import React from "react";

const Sections = (props) => {
  return (
    <section className={`${props?.background} w-full px-6 py-16`}>
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {props.children}
      </div>
    </section>
  );
};

export default Sections;
