import styles from "./Button.module.scss";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={styles["button"]} {...props} />;
};

export default Button;
