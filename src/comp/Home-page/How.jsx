import styles from "./How.module.css";

export default function How() {
  return (
    <div className={styles.HowContainer}>
      <div className={styles.container}>
        <img src="/assets/icons/icon/Layer.svg" />
        <h2>كيف يتم الامر؟</h2>
      </div>
      <div className={styles.HowSection}>
        <div className={styles.presentation}>
          <img src="/assets/icons/icon/iconPresentation.svg" />
          <h3> قدم طلب شراكة</h3>
          <p>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipiscing elit aliquam
            <br /> mauris sed ma
          </p>
        </div>
        <img src="/assets/icons/icon/iconBreak.svg" />
        <div className={styles.review}>
          <img src="/assets/icons/icon/iconReview.svg" />
          <h3>مراجعة الطلب</h3>
          <p>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipiscing elit aliquam
            <br /> mauris sed ma
          </p>
        </div>
        <img src="/assets/icons/icon/iconBreak.svg" />
        <div className={styles.interview}>
          <img src="/assets/icons/icon/iconInterview.svg" />
          <h3>مقابلة شخصية</h3>
          <p>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipiscing elit aliquam
            <br /> mauris sed ma
          </p>
        </div>
        <img src="/assets/icons/icon/iconBreak.svg" />
        <div className={styles.signature}>
          <img src="/assets/icons/icon/iconSignature.svg" />
          <h3>توقيع العقد</h3>
          <p>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipiscing elit aliquam
            <br /> mauris sed ma
          </p>
        </div>
      </div>
      <img src="/assets/images/photos/Group2.svg" className={styles.img} />
    </div>
  );
}
