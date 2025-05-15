import styles from "./Latest_projects.module.css";
import LpPhoto from "./Latest-p-photo/L-P-photo";
import LpOption from "./Latest-p-option/L-P-option";
import ComponentAddress from "../../component address";

export default function LatestProjects() {
  return (
    <div className={styles.LatestProjectsContainer}>
      <ComponentAddress title={"أحدث المشاريع"} />
      <div className={styles.container}>
        <LpOption el="h5" />
        <LpPhoto />
      </div>
      <div className={styles.container}>
        <LpPhoto />
        <LpOption dir="ltr" el="h5" />
      </div>
    </div>
  );
}
