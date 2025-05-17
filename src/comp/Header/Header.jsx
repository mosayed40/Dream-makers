import { AlignLeft, X } from "lucide-react";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className={styles.menuContainer}>
      <a href="#" onClick={SideBarStatus} className={styles.statusMenu}>
        {Sidebar ? <X color="white" /> : <AlignLeft color="white" />}
      </a>
      {Sidebar === true && (
        <div className={styles.menu}>
          <div className={styles.handleMenu}>
            <div className={styles.handlePageTitles}>
              <a href="#">
                <h3>الرئيسية</h3>
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
    </div>
  );
}

//  Page Titles **********
function PageTitles() {
  return (
    // <div>
    <ul className={styles.container}>
      <li>
        <Link
          to="/"
          className={styles.pages}
          style={{
            color: "white",
            borderBottom: "2px #049dd9 solid",
          }}
        >
          الرئيسية
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.pages}>
          خدماتنا
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.pages}>
          مشاريعنا
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.pages}>
          كيف يتم الامر
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.pages}>
          الاسعار
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.pages}>
          المدونه
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.pages}>
          تعرف علينا
        </Link>
      </li>
    </ul>
    // </div>
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
