import { FieldValues, UseFormRegister } from 'react-hook-form';

type FormInputProps = {
  label: string;
  defaultValue?: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
};

export default function FormInput({ label, defaultValue, type = 'text', register }: FormInputProps) {
  return (
    <div className="mb-1">
      <label className="block mb-2 text-gray-800">{label}</label>
      <input
        type={type}
        className="border border-gray-300 px-3 py-2 rounded w-full"
        defaultValue={defaultValue}
        {...register(label)}
      />
    </div>
  );
}
