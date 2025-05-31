import { NavLink } from "react-router-dom";
import styles from "./Add.module.css";

export default function Add() {
  return (
    <div className={styles.add}>
      <img
        src="../assets/images/AddImg/backgroundAdd.svg"
        className={styles.backgroundAdd}
      />
      <div className={styles.add_content}>
        <img src="../assets/images/AddImg/left.svg" className={styles.x_img} />
        <img src="../assets/images/AddImg/center.svg" className={styles.img} />
        <img
          src="../assets/images/AddImg/reight.svg"
          className={styles.x_img}
        />
      </div>
      <div className={styles.add_text}>
        <h2 className={styles.add_title}>انضم لقائمة شركائنا</h2>
        <p className={styles.add_desc}>
          نحل مشكلة رياديين الأعمال الذين يفتقرون للجانب التقني ويحتاجون شريك
          يثقون فيه ليدير لهم الجانب التقني من الشركه بحيث ما يشيلون هم الجانب
          التقني ابدا.
        </p>
        <NavLink to="/request" className={styles.buttonNav}>
          <button className={styles.button}>قدم طلب شراكة؟</button>
        </NavLink>
      </div>
    </div>
  );
}
