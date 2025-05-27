import { NavLink } from "react-router-dom";
import ComponentTitle from "../ComponentTitle";
import styles from "./ProjectPricingExamples.module.css";

export default function ProjectPricingExamples() {
  const data = [
    "نحن ندير الفريق",
    "تسليم MVP الأساسي",
    "CTO بدوام جزئي",
    "4-5 آلاف دولار و5-10% من الأسهم",
    "الأسهم التي تم تحديدها بشكل متبادل",
  ];
  return (
    <div className={styles.projectPricingExamples}>
      <div>
        <ComponentTitle
          title2={"بعض الامثلة علي "}
          title1={"تسعير المشاريع"}
          dir={"ltr"}
        />
      </div>
      <p className={styles.aboutUS}>
        يقدم كل مشروع شريك متطلبات مميزة؛ ,لا يوجد اثنان متشابهان، مما يجعل من
        الصعب تقديم تقديرات دون تخطيط شامل. ,أدناه، نحن <br />
        الخطوط العريضة لمختلف, استراتيجيات التنمية التي نستخدمها كأمثلة.
      </p>
      <div className={styles.models}>
        <MiniatureModel title1={"تطوير"} title2={"أعمال فى مراحل النمو"} />
        <div className={styles.MasterModel}>
          <p>نموذج كامل</p>
          <h5>أعمال تم التحقق منها</h5>

          {data.map((data, index) => (
            <div key={index} className={styles.features}>
              <img src="/assets/icons/inputIcon.svg" />
              <p> {data}</p>
            </div>
          ))}
          <NavLink to="/request" className={styles.buttonNav}>
            <button className={styles.button}>قدم الان</button>
          </NavLink>
        </div>
        <MiniatureModel
          title1={"نموذج مصغر"}
          title2={"أعمال فى مراحل الانشاء"}
        />
        <img
          src="/assets/images/photos/Group 3.svg"
          className={styles.backgroundImg}
        />
      </div>
    </div>
  );
}

function MiniatureModel({ title1, title2 }) {
  const features = [
    "نحن ندير الفريق",
    "تسليم MVP الأساسي",
    "CTO بدوام جزئي",
    "4-5 آلاف دولار و5-10% من الأسهم",
    "الأسهم التي تم تحديدها بشكل متبادل",
  ];
  return (
    <div className={styles.MiniatureModel}>
      <div className={styles.miniature}>
        <p className={styles.title_1}> {title1}</p>
        <h5 className={styles.title_2}> {title2}</h5>
      </div>

      {features.map((feature, index) => (
        <div key={index} className={styles.features}>
          <img src="/assets/icons/inputIcon.svg" />
          <p className={styles.text}> {feature}</p>
        </div>
      ))}
      <NavLink to="/request" className={styles.buttonNav}>
        <button className={styles.button}>قدم الان</button>
      </NavLink>
    </div>
  );
}
