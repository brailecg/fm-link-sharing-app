import React from "react";
import Image from "next/image";

const AppLogo = ({ ...props }) => {
  return (
    <div {...props}>
      <Image
        src="/assets/lsa-logo.png"
        alt="devlinks logo"
        width={190}
        height={40}
      />
    </div>
  );
};

export default AppLogo;
