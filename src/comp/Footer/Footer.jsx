import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const options = [
    {
      title1: "الموقع الالكتروني",
      path1: "/home",
      title2: "من نحن",
      path2: "/about",
      title3: "خدماتنا",
      path3: "/services",
    },
    {
      title1: "الشركة",
      path1: "/home",
      title2: "حول",
      path2: "/about",
      title3: "المدونة",
      path3: "/blog",
    },
    {
      title1: "تواصل معنا",
      title2: "+01091815177",
      title3: "mostafa.2950@gmail.com",
    },
  ];
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        <img src="/assets/images/photos/Group.svg" className={styles.img}></img>
        <div className={styles.communication}>
          <Logo />
          {options.map((option, index) => (
            <Options
              key={index}
              title1={option.title1}
              path1={option.path1}
              title2={option.title2}
              path2={option.path2}
              title3={option.title3}
              path3={option.path3}
            />
          ))}
        </div>
        <Media />
        <hr style={{ width: "90%", height: "1px" }} />
        <div className={styles.brack}>
          حقوق النشر محفوظة © 2023 `❣` صانعى الاحلام.
        </div>
      </div>
    </footer>
  );
}
function Logo() {
  return (
    <div>
      <a className={styles.logo}>
        <NavLink to="/home">
          <img src="/assets/icons/logo.svg" alt="logo" className={styles.log} />
        </NavLink>
        <img src="/assets/images/صانعي الاحلام.svg" alt="image" />
      </a>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
    </div>
  );
}

function Options({ title1, title2, title3, path1, path2, path3 }) {
  return (
    <div className={styles.optionContainer}>
      <NavLink to={path1} className={styles.option}>
        <span className={styles.title}>{title1}</span>
      </NavLink>
      <NavLink to={path2} className={styles.option}>
        {title2}
      </NavLink>
      <NavLink to={path3} className={styles.option}>
        {title3}
      </NavLink>
    </div>
  );
}

function Media() {
  return (
    <div className={styles.socialMediaContainer}>
      <a href="https://www.youtube.com/@moustafa2650">
        <img src="../assets/icons/media/YouTube.svg" alt="icon"></img>
      </a>
      <a href="https://www.linkedin.com/in/moustafa2650/">
        <img src="../assets/icons/media/LinkedIn.svg" alt="icon"></img>
      </a>
      <a href="https://www.instagram.com/moustafa2650/">
        <img src="../assets/icons/media/Instagram.svg" alt="icon"></img>
      </a>
      <a href="https://twitter.com/moustafa2650">
        <img src="../assets/icons/media/Twitter.svg" alt="icon"></img>
      </a>
      <a href="https://www.facebook.com/moustafa2650">
        <img src="../assets/icons/media/Facebook.svg" alt="icon"></img>
      </a>
    </div>
  );
}
