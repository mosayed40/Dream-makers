import styles from "./AboutTheCompany.module.css";

export default function AboutTheCompany() {
  return (
    <div className={styles.TheCompany}>
      <img src="assets/icons/AboutTheCompany/Button-left.svg" />
      <div className={styles.container}>
        <div className={styles.textContainer}>
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
            لدينا تطبيق مميز يعمل بنفس مستوى التميز الذي نهدف إليه, لقد جلب فريق
            صانعى الاحلام رؤيتنا إلى الحياة بمهارة وحولت احلامنا الى حقيقة."
          </p>
          <div className={styles.profile}>
            <h4 className={styles.name}>محسن على</h4>
            <p>الرئيس التنفيذي @ بزنس كود</p>
          </div>
        </div>
        <center
          style={{
            display: "flex",
            gap: "8px",
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Icons />
        </center>
      </div>
      <img src="assets/icons/AboutTheCompany/Button-right.svg" />
    </div>
  );
}

function Icons() {
  return (
    <>
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
    </>
  );
}
