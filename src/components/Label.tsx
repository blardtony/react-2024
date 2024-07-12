import React from "react";

type LabelProps = {
  id: string;
  name: string;
};
const Label: React.FC<LabelProps> = ({ id, name }) => {
  return (
    <label htmlFor={id} className="block mb-2 font-medium text-gray-900">
      {name}
    </label>
  );
};

export default Label;
