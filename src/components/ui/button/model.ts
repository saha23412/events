import { ButtonProps } from "primereact/button";

interface ButtonCustomProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: JSX.IntrinsicElements["button"]["type"];
  label?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default ButtonCustomProps;
