import { AlignLeft, X } from "lucide-react";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  return (
    <header className={styles.head}>
      <Menu />
      <Logo />
      <PageTitles />
      <Buttons />
    </header>
  );
}
// Handle Menu ***********
function Menu() {
  const [Sidebar, setSideBar] = useState(false);
  function SideBarStatus() {
    if (Sidebar === false) {
      setSideBar(true);
    } else if (Sidebar === true) {
      setSideBar(false);
    }
  }

  return (
    <>
      <a href="#" onClick={SideBarStatus} className={styles.statusMenu}>
        {Sidebar ? <X color="white" /> : <AlignLeft color="white" />}
      </a>
      {Sidebar === true && (
        <div className={styles.menu}>
          <div className={styles.handleMenu}>
            <div className={styles.handlePageTitles}>
              <a href="#">
                <h3>الرئيسة</h3>
              </a>
              <a href="#">
                <h3>خدماتنا</h3>
              </a>
              <a href="#">
                <h3>مشاريعنا</h3>
              </a>
              <a href="#">
                <h3>كيف يتم الامر</h3>
              </a>
              <a href="#">
                <h3>الاسعار</h3>
              </a>
              <a href="#">
                <h3>المدونه</h3>
              </a>
              <a href="#">
                <h3>تعرف علينا</h3>
              </a>
            </div>
            <button className={styles.handleButton}>ع</button>
          </div>
        </div>
      )}
    </>
  );
}
//  Page Titles **********
function PageTitles() {
  return (
    <div className={styles.container}>
      <a href="#">
        <h3 className={styles.home}>الرئيسة</h3>
      </a>
      <a href="#">
        <h3>خدماتنا</h3>
      </a>
      <a href="#">
        <h3>مشاريعنا</h3>
      </a>
      <a href="#">
        <h3>كيف يتم الامر</h3>
      </a>
      <a href="#">
        <h3>الاسعار</h3>
      </a>
      <a href="#">
        <h3>المدونه</h3>
      </a>
      <a href="#">
        <h3>تعرف علينا</h3>
      </a>
    </div>
  );
}

// Logo **********
function Logo() {
  return (
    <a className={styles.logo}>
      <img src="/assets/icons/logo.svg" alt="logo" className={styles.log} />
      <img
        src="/assets/images/صانعي الاحلام.svg"
        alt="image"
        className={styles.photo}
      />
    </a>
  );
}

// Buttons ***********
function Buttons() {
  return (
    <div className={styles.button}>
      <button className={styles.but_2}>قدم طلب</button>
      <button className={styles.but_1}>ع</button>
    </div>
  );
}
