import styles from "./Latest_projects.module.css";
import LpPhoto from "./Latest-p-photo/L-P-photo";
import LpOption from "./Latest-p-option/L-P-option";
import ComponentTitle from "../../ComponentTitle";

export default function LatestProjects() {
  return (
    <div className={styles.LatestProjectsContainer}>
      <ComponentTitle title1={"أحدث المشاريع"} />
      <div className={styles.firstContainer}>
        <LpPhoto />
        <LpOption el="h5" style={{ direction: "rtl" }} />
      </div>
      <div className={styles.scondContainer}>
        <LpPhoto />
        <LpOption el="h5" style={{ direction: "ltr" }} />
      </div>
    </div>
  );
}
