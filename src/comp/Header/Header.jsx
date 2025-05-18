import { AlignLeft, X } from "lucide-react";
import styles from "./Header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
  const datalink = [
    { title: "الرئيسية", link: "/home" },
    { title: "خدماتنا", link: "/services" },
    { title: "مشاريعنا", link: "/projects" },
    { title: "كيف يتم الامر", link: "/how" },
    { title: "الاسعار", link: "/prices" },
    { title: "المدونه", link: "/blog" },
    { title: "تعرف علينا", link: "/about" },
  ];
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
            <ul>
              {datalink.map((path, index) => (
                <NavLink
                  key={index}
                  to={path.link}
                  className={styles.navLink}
                  style={({ isActive }) => ({
                    style: isActive ? styles.handlePageTitles : undefined,
                  })}
                >
                  <li className={styles.handlePageTitles}>{path.title}</li>
                </NavLink>
              ))}
            </ul>
            <button className={styles.handleButton}>ع</button>
          </div>
        </div>
      )}
    </div>
  );
}

//  Page Titles **********
function PageTitles() {
  const datalink = [
    { title: "الرئيسية", link: "/home" },
    { title: "خدماتنا", link: "/services" },
    { title: "مشاريعنا", link: "/projects" },
    { title: "كيف يتم الامر", link: "/how" },
    { title: "الاسعار", link: "/prices" },
    { title: "المدونه", link: "/blog" },
    { title: "تعرف علينا", link: "/about" },
  ];
  return (
    <ul className={styles.container}>
      {datalink.map((path, index) => (
        <li key={index}>
          <NavLink
            to={path.link}
            className={styles.pages}
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
              borderBottom: isActive ? "2px #049dd9 solid" : undefined,
            })}
          >
            {path.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

// Logo **********
function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink to="/home">
        <img src="/assets/icons/logo.svg" alt="logo" className={styles.log} />
      </NavLink>
      <img
        src="/assets/images/صانعي الاحلام.svg"
        alt="image"
        className={styles.photo}
      />
    </div>
  );
}

// Buttons ***********
function Buttons() {
  return (
    <div className={styles.button}>
      <NavLink to="/request">
        <button className={styles.but_2}>قدم طلب</button>
      </NavLink>

      <button className={styles.but_1}>ع</button>
    </div>
  );
}
