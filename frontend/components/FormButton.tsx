type FormButtonProps = {
    label: string;
  };
  
  export default function FormButton({ label }: FormButtonProps) {
    return (
      <button
        type="submit"
        className="bg-primary-main text-black py-2 px-4 rounded w-full"
      >
        {label}
      </button>
    );
  }
  