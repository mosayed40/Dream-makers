import styles from "./AboutTheCompany.module.css";

export default function AboutTheCompany() {
  return (
    <div className={styles.container}>
      <img src="assets/icons/AboutTheCompany/Button-left.svg" />
      <div className={styles.section}>
        <div>
          <img
            src="assets/icons/AboutTheCompany/icon-top-right.svg"
            className={styles.img1}
          />
          <img
            src="assets/icons/AboutTheCompany/icon-bottom-left.svg"
            className={styles.img2}
          />
          <p>
            "باعتبارنا شركة تعمل مع عملاء بارزين ,من المهم بالنسبة لنا أن يكون
            لدينا تطبيق مميز يعمل بنفس مستوى
            <br /> التميز الذي نهدف إليه, لقد جلب فريق صانعى الاحلام رؤيتنا إلى
            الحياة بمهارة وحولت احلامنا الى حقيقة."
          </p>
          <section>
            <h4>محسن على</h4>
            <p>الرئيس التنفيذي @ بزنس كود</p>
          </section>
        </div>
        <section
          style={{
            // background: "red",
            display: "flex",
            gap: "8px",

            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src="assets/icons/AboutTheCompany/Button - Go to testimonial 2.svg" />
          <img src="assets/icons/AboutTheCompany/Button - Go to testimonial 2.svg" />
          <img src="assets/icons/AboutTheCompany/Button - Go to testimonial 2.svg" />
          <img src="assets/icons/AboutTheCompany/Button - Go to testimonial 2.svg" />
          <img src="assets/icons/AboutTheCompany/Button - Go to testimonial 2.svg" />
          <img
            src="assets/icons/AboutTheCompany/Button - Go to testimonial 2.svg"
            style={{
              padding: "2px",
              background: "#049DD9",
              borderRadius: "50%",
            }}
          />
        </section>
      </div>
      <img src="assets/icons/AboutTheCompany/Button-right.svg" />
    </div>
  );
}
