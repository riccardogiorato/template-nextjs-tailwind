import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button
      type="button"
      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
