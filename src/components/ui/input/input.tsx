import { InputText } from "primereact/inputtext";
import InputCustomProps from "./model";

const InputCustom: React.FC<InputCustomProps> = ({
  placeholder,
  value,
  onChange,
  className,
  ...rest
}) => {
  return (
    <InputText
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: 220 }}
      {...rest}
    />
  );
};

export default InputCustom;
