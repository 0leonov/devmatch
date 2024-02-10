import React from "react";

export function DevMatchLogo({ className }: { className?: string }) {
  return (
    <svg
      height="20"
      width="20"
      fill="none"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C3.58172 16 0 12.4183 0 8V8C0 3.58172 3.58172 0 8 0H56C69.2548 0 80 10.7452 80 24C80 37.2548 69.2548 48 56 48H32C27.5817 48 24 51.5817 24 56C24 60.4183 27.5817 64 32 64H36C40.4183 64 44 67.5817 44 72V72C44 76.4183 40.4183 80 36 80H32C18.7452 80 8 69.2548 8 56C8 42.7452 18.7452 32 32 32H56C60.4183 32 64 28.4183 64 24C64 19.5817 60.4183 16 56 16H8ZM56 64C51.5817 64 48 67.5817 48 72V72C48 76.4183 51.5817 80 56 80V80C60.4183 80 64 76.4183 64 72V72C64 67.5817 60.4183 64 56 64V64Z"
      />
    </svg>
  );
}
