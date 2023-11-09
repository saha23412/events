import { Button } from "primereact/button";
import ButtonCustomProps from "./model";

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  type,
  label,
  onClick,
  className,
  disabled,
  children,
  ...rest
}) => {
  return (
    <div className="card flex justify-content-center">
      <Button
        className={className}
        label={label}
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={{ outline: "none" }}
        {...rest}
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonCustom;
