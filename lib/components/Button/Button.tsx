import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button data-variant={variant} className={styles["button"]} {...props}>
      {children}
    </button>
  );
};

export default Button;
