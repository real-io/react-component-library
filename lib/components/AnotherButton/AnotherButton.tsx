import styles from "./AnotherButton.module.scss";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={styles["anotherButton"]} {...props} />;
};

export default Button;
