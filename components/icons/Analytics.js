import * as React from "react";

function SvgAnalytics(props) {
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
        d="M12 22a.75.75 0 01-.75-.75V2.75a.75.75 0 011.5 0v18.5A.75.75 0 0112 22zm5.14 0a.75.75 0 01-.75-.75V7.89a.749.749 0 111.5 0v13.36a.75.75 0 01-.75.75zM6.86 22a.75.75 0 01-.75-.75V10.973a.75.75 0 011.5 0V21.25a.75.75 0 01-.75.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAnalytics;
