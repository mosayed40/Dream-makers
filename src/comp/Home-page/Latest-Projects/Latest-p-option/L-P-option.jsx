import styles from "./L-P-option.module.css";

export default function LpOption({ dir, el = "h5" }) {
  const data = [
    { title: "تطبيقات" },
    { title: "بطاقات عمل" },
    { title: "حلول ذكية" },
    { title: "محفظة بطاقات" },
  ];
  return (
    <div className={styles.LpOptionContainer}>
      <div style={{ direction: dir }} className={styles.LpOption}>
        <img src="../assets/logoes/logoBusiness.svg" />

        {el === "h5" && (
          <h5 style={{ direction: dir }} className={styles.title}>
            بزنس كود
          </h5>
        )}

        <p style={{ direction: dir }} className={styles.text}>
          بزنس كود هو محفظة بطاقات الكترونية تضم انواع متعددة من البطاقات مثل
          بطاقات الاعمال, بطاقات المرور, بطاقات الهوية وغيرها من البطاقات...
          <span>المزيد</span>
        </p>
        <div
          className={styles.LpOptionButtonContainer}
          style={{ direction: dir }}
        >
          {data.map((item, index) => (
            <Button key={index} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Button({ title }) {
  return <button className={styles.button}>{title}</button>;
}
