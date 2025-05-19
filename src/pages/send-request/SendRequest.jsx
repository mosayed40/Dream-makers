import styles from "./SendRequest.module.css";
import ComponentTitle from "../../comp/ComponentTitle";

export default function SendRequest() {
  return (
    <div className={styles.sendRequest}>
      <ComponentTitle title1={"تقديم طلب شراكة"} />
      <p>برجاء ملئ البيانات التالية والضغط على ارسال الطلب</p>
      <div className={styles.sendRequestContianer}>
        <UnputName />
        <UnputPhoneAndEmail />
        <UnputProject />
        <button>ارسال الطلب</button>
      </div>

      <img src="../assets/images/photos/Group 3.svg" className={styles.img} />
    </div>
  );
}
function UnputName() {
  return (
    <div className={styles.UnputName}>
      <h5>
        الاسم <span>(مطلوب)</span>
      </h5>
      <input type="text" placeholder="اكتب الاسم هنا..." />
    </div>
  );
}

function UnputPhoneAndEmail() {
  return (
    <div className={styles.contianrt}>
      <div className={styles.UnputName}>
        <h5>
          رقم الهاتف <span>(مطلوب)</span>
        </h5>
        <input type="number" placeholder="ادخل رقم الهاتف..." />
      </div>
      <div className={styles.UnputName}>
        <h5>
          البريد الالكتروني <span>(مطلوب)</span>
        </h5>
        <input type="email" placeholder="ادخل عنوان البريد الالكترونى..." />
      </div>
    </div>
  );
}

function UnputProject() {
  return (
    <div className={styles.UnputName}>
      <h5>
        وصف المشروع <span>(مطلوب)</span>
      </h5>
      <input
        type="text"
        placeholder="اعطنا وصف مبسط عن المشروع..."
        style={{ height: "120px" }}
      />
    </div>
  );
}
