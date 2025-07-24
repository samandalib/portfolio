import React from "react";

export default function TextTopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_4135_650" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
        <rect x="0.0131836" y="0.893555" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_4135_650)">
        <path d="M7.70543 21.3933V7.95102H9.74393V21.3933H7.70543ZM14.2824 15.3933V7.95102H16.3209V15.3933H14.2824ZM3.01318 5.37402V4.37402H21.0132V5.37402H3.01318Z" fill="currentColor" />
      </g>
    </svg>
  );
} 