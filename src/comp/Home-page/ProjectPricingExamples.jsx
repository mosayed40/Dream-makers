import ComponentTitle from "../ComponentTitle";
import styles from "./ProjectPricingExamples.module.css";

export default function ProjectPricingExamples() {
  return (
    <div className={styles.projectPricingExamples}>
      <div>
        <ComponentTitle
          title2={"بعض الامثلة علي "}
          title1={"تسعير المشاريع"}
          dir={"ltr"}
        />
      </div>
      <p>
        يقدم كل مشروع شريك متطلبات مميزة؛ ,لا يوجد اثنان متشابهان، مما يجعل من
        الصعب تقديم تقديرات دون تخطيط شامل. ,أدناه، نحن <br />
        الخطوط العريضة لمختلف, استراتيجيات التنمية التي نستخدمها كأمثلة.
      </p>
      <div className={styles.models}>
        <MiniatureModel />
        <div className={styles.MasterModel}>
          <p>نموذج كامل</p>
          <h5>أعمال تم التحقق منها</h5>
          <div>
            <img src="/assets/icons/inputIcon.svg" />
            <p>نحن ندير الفريق</p>
          </div>
          <div>
            <img src="/assets/icons/inputIcon.svg" />
            <p>تسليم MVP الأساسي</p>
          </div>
          <div>
            <img src="/assets/icons/inputIcon.svg" />
            <p>CTO بدوام جزئي</p>
          </div>
          <div>
            <img src="/assets/icons/inputIcon.svg" />
            <p>4-5 آلاف دولار و5-10% من الأسهم</p>
          </div>
          <div>
            <img src="/assets/icons/inputIcon.svg" />
            <p> الأسهم التي تم تحديدها بشكل متبادل </p>
          </div>
          <button className={styles.button}>قدم الان</button>
        </div>
        <MiniatureModel />
        <img
          src="/assets/images/photos/Group 3.svg"
          className={styles.backgroundImg}
        />
      </div>
    </div>
  );
}

function MiniatureModel() {
  const datalist = [
    {
      title: "نموذج كامل",
      desc: "أعمال تم التحقق منها",
    },
    {
      title: " تطوير",
      desc: "أعمال تم التحقق منها",
    },
  ];
  const features = [
    "نحن ندير الفريق",
    "تسليم MVP الأساسي",
    "CTO بدوام جزئي",
    "4-5 آلاف دولار و5-10% من الأسهم",
    "الأسهم التي تم تحديدها بشكل متبادل",
  ];
  return (
    <div className={styles.MiniatureModel}>
      {datalist.map((item, index) => (
        <div key={index} className={styles.miniature}>
          <p>{item.title}</p>
          <h5>{item.desc}</h5>
        </div>
      ))}
      {features.map((feature, index) => (
        <div className={styles.features} key={index}>
          <img src="/assets/icons/inputIcon.svg" />
          <p> {feature}</p>
        </div>
      ))}
      <button className={styles.button}>قدم الان</button>
    </div>
  );
}
