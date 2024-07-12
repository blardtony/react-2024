type InputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ id, name, value, onChange }: InputProps) => {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-violet-700 focus:border-violet-700 block w-full p-3"
      placeholder={name}
    />
  );
};

export default Input;
