import React from "react";

type InputProps = {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input: React.FC<InputProps> = ({ id, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-violet-700 focus:border-violet-700 block w-full p-3"
      placeholder={placeholder}
    />
  );
};

export default Input;
