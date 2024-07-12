import React from "react";

type ButtonProps = {
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => (
  <button
    className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-2 focus:ring-violet-300 focus:outline-none font-medium rounded px-4 py-2"
    onClick={onClick}
    type={type || "button"}
  >
    {children}
  </button>
);

export default Button;
