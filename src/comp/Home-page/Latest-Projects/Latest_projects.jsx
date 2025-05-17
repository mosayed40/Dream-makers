import styles from "./Latest_projects.module.css";
import LpPhoto from "./Latest-p-photo/L-P-photo";
import LpOption from "./Latest-p-option/L-P-option";
import ComponentTitle from "../../ComponentTitle";

export default function LatestProjects() {
  return (
    <div className={styles.LatestProjectsContainer}>
      <ComponentTitle title1={"أحدث المشاريع"} />
      <div className={styles.container}>
        <LpOption dir="rtl" el="h5" />
        <LpPhoto />
      </div>
      <div className={styles.container}>
        <LpPhoto />
        <LpOption dir="ltr" el="h5" />
      </div>
    </div>
  );
}
