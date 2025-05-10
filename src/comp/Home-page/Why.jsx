import styles from "./Why.module.css";

export default function Why() {
  return (
    <div className={styles.whyContainer}>
      <div className={styles.container}>
        <img src="/assets/icons/icon/Layer.svg" />
        <h2>
          <span>لماذا</span> صانعى الاحلام؟
        </h2>
      </div>
      <p className={styles.text}>
        نحل مشكلة رياديين الأعمال الذين يفتقرون للجانب التقني ويحتاجون شريك
        يثقون فيه ليدير لهم الجانب التقني من الشركه بحيث ما يشيلون <br /> هم
        الجانب التقني ابدا.
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <div className={styles.section}>
            <h4>احصل على المستثمر الأول حتى قبل أن تبدأ</h4>
            <p>
              سوف تنضم شركة صانعى الاحلام إلى رحلتك الناشئة لتصبح المستثمر
              <br /> الأول في شركتك الناشئة, حتى قبل أن تبدأ.
            </p>
            <img
              src="/assets/icons/icon/iconGroup.svg"
              className={styles.cardsIcon}
            />
          </div>
          <div className={styles.section}>
            <h4>امتلك فريقك الفني الكامل</h4>
            <p>
              امتلك فريقك الخاص لدعم شركتك الناشئة المتنامية في جميع
              <br /> المجالات التقنية مثل التطوير والبنية التحتية والتسويق
              الرقمي ..الخ.
            </p>
            <img
              src="/assets/icons/icon/iconGroup.svg"
              className={styles.cardsIcon}
            />
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.section}>
            <h4>وفر جميع تكاليف الأجهزة والبرامج الخاصة بك</h4>
            <p>
              العمل مع صانعى الاحلام يوفر عليك تكاليف الأدوات والأجهزة التقنية
              <br />
              التى سوف تحتاج. ,نحن نقدم لك منتج جاهز للاستخدام.
            </p>
            <img
              src="/assets/icons/icon/iconGroup.svg"
              className={styles.cardsIcon}
            />
          </div>
          <div className={styles.section}>
            <h4>الإرشاد من القادة ذوي الخبرة والناجحين</h4>
            <p>
              قادة ذوو خبرة لتوجيهك في جميع جوانب مجال بدء التشغيل والتأكد من
              <br />
              ذلك, لديك عمل ناجح.
            </p>
            <img
              src="/assets/icons/icon/iconGroup.svg"
              className={styles.cardsIcon}
            />
          </div>
        </div>
      </div>
      <img src="/assets/icons/icon/imgGroup.svg" className={styles.whyIcons} />
    </div>
  );
}
