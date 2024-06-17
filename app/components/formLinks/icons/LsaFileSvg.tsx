import * as React from "react";

type LinkIconProps = {
  width?: number;
  height?: number;
  pathFill: string;
};

const LsaFileSvg = ({
  width = 34,
  height = 28,
  pathFill = "fill-[#633CFF]",
}: LinkIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={`${pathFill}  `}>
    <path d="M30.75.25H3.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V2.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L3.25 17.339V2.75h27.5ZM3.25 20.875l8.125-8.125 12.5 12.5H3.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L24.91 16.5l5.839 5.84v2.91ZM19.5 9.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z" />
  </svg>
);
export default LsaFileSvg;
