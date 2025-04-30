import styles from "./L-P-option.module.css";

export default function LpOption({ dir, el = "h5" }) {
  return (
    <div className={styles.LpOptionContainer}>
      <div style={{ direction: dir }} className={styles.LpOption}>
        <img src="../assets/logoes/logoBusiness.svg" />

        {el === "h5" && (
          <h5 style={{ direction: dir }} className={styles.title}>
            بزنس كود
          </h5>
        )}
        {el === "h6" && (
          <h6 style={{ direction: dir }} className={styles.title}>
            بزنس كود
          </h6>
        )}
        <p style={{ direction: dir }} className={styles.text}>
          بزنس كود هو محفظة بطاقات الكترونية تضم انواع متعددة من البطاقات مثل
          بطاقات <br />
          الاعمال, بطاقات المرور, بطاقات الهوية وغيرها من البطاقات...
          <span>المزيد</span>
        </p>
        <div className={styles.LpOptionButtonContainer}>
          <button className={styles.button}>محفظة بطاقات</button>
          <button className={styles.button}>حلول ذكية</button>
          <button className={styles.button}>بطاقات عمل</button>
          <button className={styles.button}>تطبيقات</button>
        </div>
      </div>
    </div>
  );
}
