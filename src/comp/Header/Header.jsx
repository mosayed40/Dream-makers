import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.button}>
        <button className={styles.but_1}>ع</button>
        <button className={styles.but_2}>قدم طلب</button>
      </div>
      <div className={styles.container}>
        <a>
          <h3 className={styles.home}>الرئيسة</h3>
        </a>
        <a>
          <h3>خدماتنا</h3>
        </a>
        <a>
          <h3>مشاريعنا</h3>
        </a>
        <a>
          <h3>كيف يتم الامر</h3>
        </a>
        <a>
          <h3>الاسعار</h3>
        </a>
        <a>
          <h3>المدونه</h3>
        </a>
        <a>
          <h3>تعرف علينا</h3>
        </a>
      </div>
      <div>
        <a className={styles.logo}>
          <img src="/assets/icons/logo.svg" alt="logo" />
          <img src="/assets/images/صانعي الاحلام.svg" alt="image" />
        </a>
      </div>
    </header>
  );
}
