import * as React from "react";

function SvgKeyboard(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={6.674} r={1.889} fill="currentColor" />
      <path
        d="M9.828 14.817l-1.62 3.342a.786.786 0 001.491.5l1.602-3.176a.76.76 0 011.356 0l1.608 3.195a.787.787 0 001.491-.502l-1.62-3.342.032.07-.123-.262a4.249 4.249 0 01-.16-3.24.756.756 0 01.712-.505h2.032a.787.787 0 000-1.573H7.37a.786.786 0 10-.001 1.572h1.985c.32 0 .606.2.713.503a4.262 4.262 0 01-.158 3.24l-.125.263"
        fill="currentColor"
      />
      <path
        d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgKeyboard;
