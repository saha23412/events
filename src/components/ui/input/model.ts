import { InputTextProps } from "primereact/inputtext";

interface InputCustomProps extends InputTextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export default InputCustomProps;
