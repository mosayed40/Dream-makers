import ComponentTitle from "../../comp/ComponentTitle";
import styles from "./AboutUs.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.Container}>
        <ComponentTitle title1={"من نحن؟"} />
        <p className={styles.text}>
          نحن شركائك التقنيين نشيل عنك هم الجانب التقني كاملا من اعداد البيئه
          المناسبه ، الموارد والتطوير المستمر لمنتجتك التقني ونصبح السي تي او
          لشركتك. ركز على البزنس وخل التقنيه علينا.
        </p>
        <OurFeatures />
      </div>
      <img src="../assets/images/photos/Group 3.svg" className={styles.img} />
    </div>
  );
}

function OurFeatures() {
  const data = [
    {
      title: "هدفنا",
      text: "نتعاون مع الشركات الناشئة في رحلتها نحو النجاح، نقدم دعمًا تقنيًا فريدًا يحول رؤيتهم إلى واقع.",
    },
    {
      title: "رؤيتنا",
      text: "تحرر رواد الأعمال من التعقيد التكنولوجي، ونمكنهم من قيادة بثقة رؤوية متجهة حيث يركزون على رحلتهم الفريدة.",
    },
    {
      title: "ما يميزنا ",
      text: " نحن شركاء وليس مقدمي خدمات فقط، نشارك في المخاطر مع رائد الأعمال من خلال استثمارنا في مشروعه بنموذج العمل مقابل الحصة. يمتلك قادتنا أكثر من 25 عامًا من الخبرة في سوق التكنولوجيا",
    },
  ];
  return (
    <>
      {data.map((itme, index) => (
        <div className={styles.Features} key={index}>
          <h5>{itme.title}</h5>
          <p>{itme.text}</p>
          <img src="/assets/icons/icon/iconGroup.svg" />
        </div>
      ))}
    </>
  );
}
