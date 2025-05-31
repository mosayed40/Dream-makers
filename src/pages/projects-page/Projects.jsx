import ComponentTitle from "../../components/ComponentTitle";
import LpOption from "../../components/Home-page/Latest-Projects/Latest-p-option/L-P-option";
import LpPhoto from "../../components/Home-page/Latest-Projects/Latest-p-photo/L-P-photo";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <ComponentTitle title1={"مشاريع قمنا بالعمل عليها"} />
      <div className={styles.primaryContainer}>
        <LpPhoto />
        <LpOption style={{ direction: "rtl" }} el="h5" />
      </div>
      <div className={styles.scondeContainer}>
        <LpPhoto />
        <LpOption style={{ direction: "ltr" }} el="h5" />
      </div>
      <div className={styles.thirdContainer}>
        <LpPhoto />
        <LpOption style={{ direction: "rtl" }} el="h5" />
      </div>
    </div>
  );
}
