import * as React from "react";

function SvgAds(props) {
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
        d="M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5a.75.75 0 00-.75.75v15.5c0 .413.336.75.75.75h17.5a.75.75 0 00.75-.75V4.25a.75.75 0 00-.75-.75H3.25z"
        fill="currentColor"
      />
      <path
        d="M16.758 6.982h-5.806a.75.75 0 000 1.5h3.995L6.92 16.508a.75.75 0 00.53 1.28c.19 0 .385-.072.53-.22l8.027-8.025v3.995a.75.75 0 001.5 0V7.732a.75.75 0 00-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAds;
