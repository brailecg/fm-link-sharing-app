import * as React from "react";
type LinkIconProps = {
  width: number;
  height: number;
  pathFill: string;
};

const SvgComponent = ({ width = 21, height = 20, pathFill }: LinkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${pathFill} group-hover:fill-[#633cff]`}>
      <path d="M11.154 14.65a.938.938 0 0 1 0 1.329l-.464.464a4.69 4.69 0 0 1-6.632-6.631l1.885-1.884a4.687 4.687 0 0 1 6.432-.194.94.94 0 1 1-1.25 1.407 2.812 2.812 0 0 0-3.857.115l-1.883 1.88a2.813 2.813 0 1 0 3.978 3.979l.464-.464a.936.936 0 0 1 1.327 0ZM16.94 3.558a4.694 4.694 0 0 0-6.631 0l-.464.464a.94.94 0 1 0 1.328 1.328l.464-.464a2.813 2.813 0 0 1 3.978 3.978l-1.883 1.885a2.813 2.813 0 0 1-3.858.112.94.94 0 1 0-1.25 1.406 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .002-6.633v-.002Z" />
    </svg>
  );
};
export default SvgComponent;
