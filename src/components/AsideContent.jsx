import styles from "./asideStyle.module.css";

export function AsideContent() {
  const items = [...Array(5).keys()];

  return (
    <div className={styles.asideStyle}>
      {items.map((item) => (
        <div key={item}>Side bar element</div>
      ))}
    </div>
  );
}
