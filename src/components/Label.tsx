type LabelProps = {
  id: string;
  name: string;
};
const Label = ({ id, name }: LabelProps) => {
  return (
    <label htmlFor={id} className="block mb-2 font-medium text-gray-900">
      {name}
    </label>
  );
};

export default Label;
