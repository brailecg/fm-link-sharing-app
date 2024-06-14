import * as React from "react";
import { SVGProps } from "react";
const LsaLiSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}>
    <path
      fill="#737373"
      d="M10.667 0A1.333 1.333 0 0 1 12 1.333v9.334A1.334 1.334 0 0 1 10.667 12H1.333A1.334 1.334 0 0 1 0 10.667V1.333A1.333 1.333 0 0 1 1.333 0h9.334Zm-.334 10.333V6.8A2.173 2.173 0 0 0 8.16 4.627c-.567 0-1.227.346-1.547.866v-.74h-1.86v5.58h1.86V7.047a.93.93 0 1 1 1.86 0v3.286h1.86ZM2.587 3.707a1.12 1.12 0 0 0 1.12-1.12 1.124 1.124 0 1 0-1.12 1.12Zm.926 6.626v-5.58H1.667v5.58h1.846Z"
    />
  </svg>
);
export default LsaLiSvg;
