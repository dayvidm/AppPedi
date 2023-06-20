import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type FormInputProps<T extends FieldValues = FieldValues> = {
  label: string;
  defaultValue?: string;
  type?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
};

export default function FormInput<T extends FieldValues = FieldValues>({ label, defaultValue, type = 'text', register, name }: FormInputProps<T>) {
  return (
    <div className="mt-2">
      <label className="block mb-1 text-gray-800">{label}</label>
      <input
        type={type}
        className="border border-gray-300 px-3 py-2 rounded w-full mr-10"
        defaultValue={defaultValue}
        {...register(name)}
      />
    </div>
  );
}
