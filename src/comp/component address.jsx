import styles from "./component address.module.css";

export default function ComponentAddress({ title }) {
  return (
    <div className={styles.container}>
      <img src="/assets/icons/icon/Layer.svg" />
      <h2>
        {/* <span>لماذا</span> صانعى الاحلام؟ */}
        {title}
      </h2>
    </div>
  );
}
