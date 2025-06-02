import styles from "./ComponentTitle.module.css";

export default function ComponentTitle({ title1, title2, dir, style }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="/assets/icons/icon/Layer.svg"
        alt="icon"
      />
      <h2 dir={dir} style={style}>
        <span className={styles.title1} dir={dir}>
          {title1}
        </span>
        <span className={styles.title2} dir={dir}>
          {title2}
        </span>
      </h2>
    </div>
  );
}
