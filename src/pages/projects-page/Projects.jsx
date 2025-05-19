import ComponentTitle from "../../comp/ComponentTitle";
import LpOption from "../../comp/Home-page/Latest-Projects/Latest-p-option/L-P-option";
import LpPhoto from "../../comp/Home-page/Latest-Projects/Latest-p-photo/L-P-photo";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <ComponentTitle title1={"مشاريع قمنا بالعمل عليها"} />
      <div className={styles.container}>
        <LpOption dir="rtl" el="h5" />
        <LpPhoto />
      </div>
      <div className={styles.container}>
        <LpPhoto />
        <LpOption dir="ltr" el="h5" />
      </div>
      <div className={styles.container}>
        <LpOption dir="rtl" el="h5" />
        <LpPhoto />
      </div>
    </div>
  );
}
