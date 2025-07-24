import React from "react";

export default function PointerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_4133_683" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
        <rect x="0.0400391" y="0.541016" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_4133_683)">
        <path d="M12.04 14.041C11.6182 14.041 11.2628 13.8964 10.9738 13.6073C10.6846 13.3183 10.54 12.9628 10.54 12.541C10.54 12.1192 10.6846 11.7638 10.9738 11.4748C11.2628 11.1856 11.6182 11.041 12.04 11.041C12.4619 11.041 12.8173 11.1856 13.1063 11.4748C13.3955 11.7638 13.54 12.1192 13.54 12.541C13.54 12.9628 13.3955 13.3183 13.1063 13.6073C12.8173 13.8964 12.4619 14.041 12.04 14.041ZM11.54 8.54102V4.54102H12.54V8.54102H11.54ZM11.54 20.541V16.541H12.54V20.541H11.54ZM16.04 13.041V12.041H20.04V13.041H16.04ZM4.04004 13.041V12.041H8.04004V13.041H4.04004Z" fill="currentColor" />
      </g>
    </svg>
  );
} 