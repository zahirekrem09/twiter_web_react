import * as React from "react";

function SvgDisplay(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.692 11.205l6.383-7.216a1.15 1.15 0 10-1.627-1.628l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z"
        fill="currentColor"
      />
      <path
        d="M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836a.75.75 0 010 1.5H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28a.75.75 0 111.5 0v6.28c0 1.163-.934 2.11-2.084 2.11z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDisplay;
