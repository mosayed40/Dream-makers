import ComponentAddress from "../component address";
import styles from "./ProjectPricingExamples.module.css";

export default function ProjectPricingExamples() {
  return (
    <div className={styles.projectPricingExamples}>
      <ComponentAddress title={"بعض الاممثلة علي تسعير المشاريع"} />
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
  return (
    <div className={styles.MiniatureModel}>
      <p>تطوير</p>
      <h5>أعمال فى مراحل المنو</h5>
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
  );
}
