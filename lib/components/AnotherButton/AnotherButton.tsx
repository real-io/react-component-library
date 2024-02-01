import styles from "./AnotherButton.module.scss";

interface AnotherButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
}
/**
 * This is another button component
 */
const AnotherButton = ({ variant, children, ...props }: AnotherButtonProps) => {
  return (
    <button data-variant={variant} className={styles["anotherButton"]} {...props}>
      {children}
    </button>
  );
};

export default AnotherButton;
