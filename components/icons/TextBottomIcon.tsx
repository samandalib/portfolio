import React from "react";

export default function TextBottomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_4135_662" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
        <rect x="0.791016" y="0.893555" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_4135_662)">
        <path d="M3.79102 21.3933V20.3933H21.791V21.3933H3.79102ZM8.48327 17.8163V4.37402H10.5218V17.8163H8.48327ZM15.0603 17.8163V10.374H17.0988V17.8163H15.0603Z" fill="currentColor" />
      </g>
    </svg>
  );
} 