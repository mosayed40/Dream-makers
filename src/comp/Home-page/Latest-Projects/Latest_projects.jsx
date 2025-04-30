import styles from "./Latest_projects.module.css";
import LpPhoto from "./Latest-p-photo/L-P-photo";
import LpOption from "./Latest-p-option/L-P-option";

export default function LatestProjects() {
  return (
    <div className={styles.LatestProjectsContainer}>
      <div className={styles.LatestProjectsHeader}>
        <img src="/assets/icons/icon/Layer.svg" />
        <h2>أحدث المشاريع</h2>
      </div>
      <div className={styles.container}>
        <LpOption />
        <LpPhoto />
      </div>
      <div className={styles.container}>
        <LpPhoto />
        <LpOption dir="ltr" el="h5" className={styles.LpOption} />
      </div>
    </div>
  );
}
