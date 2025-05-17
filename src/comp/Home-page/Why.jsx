import ComponentTitle from "../ComponentTitle";
import styles from "./Why.module.css";

export default function Why() {
  const data = [
    {
      title: "احصل على المستثمر الأول حتى قبل أن تبدأ",
      text: "سوف تنضم شركة صانعى الاحلام إلى رحلتك الناشئة لتصبح المستثمر الأول في شركتك الناشئة, حتى قبل أن تبدأ.",
    },
    {
      title: "امتلك فريقك الفني الكامل",
      text: "امتلك فريقك الخاص لدعم شركتك الناشئة المتنامية في جميع المجالات التقنية مثل التطوير والبنية التحتية والتسويق الرقمي ..الخ.",
    },
    {
      title: "وفر جميع تكاليف الأجهزة والبرامج الخاصة بك",
      text: "العمل مع صانعى الاحلام يوفر عليك تكاليف الأدوات والأجهزة التقنية التى سوف تحتاج. ,نحن نقدم لك منتج جاهز للاستخدام.",
    },
    {
      title: "الإرشاد من القادة ذوي الخبرة والناجحين",
      text: "قادة ذوو خبرة لتوجيهك في جميع جوانب مجال بدء التشغيل والتأكد من ذلك, لديك عمل ناجح.",
    },
  ];
  return (
    <div className={styles.whyContainer}>
      <ComponentTitle title2={"صانعي الاحلام"} title1={"لماذا "} />
      <p className={styles.text}>
        نحل مشكلة رياديين الأعمال الذين يفتقرون للجانب التقني ويحتاجون شريك
        يثقون فيه ليدير لهم الجانب التقني من الشركه بحيث ما يشيلون هم الجانب
        التقني ابدا.
      </p>
      <div className={styles.container}>
        {data.map((item, index) => (
          <AboutOurFeatures key={index} title={item.title} text={item.text} />
        ))}
      </div>
      <img src="/assets/icons/icon/imgGroup.svg" className={styles.whyIcons} />
    </div>
  );
}

function AboutOurFeatures({ title, text }) {
  return (
    <div className={styles.cards}>
      <h4 className={styles.title}>{title}</h4>
      <p>{text}</p>
      <img
        src="/assets/icons/icon/iconGroup.svg"
        className={styles.cardsIcon}
      />
    </div>
  );
}
