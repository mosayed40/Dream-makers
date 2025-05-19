import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <HeroVideo />
      <div className={styles.videoContainer}>
        <HeroImage />
        <HeroText />
        <NavLink to="/request" className={styles.buttonNav}>
          <button className={styles.button}>قدم طلب شراكة؟</button>
        </NavLink>
      </div>
    </div>
  );
}

function HeroVideo() {
  return (
    <video autoPlay loop muted className={styles.video}>
      <source src="./assets/videos/StartVideo.mp4" type="video/mp4" />
    </video>
  );
}
function HeroImage() {
  return (
    <img className={styles.image} src="/assets/images/photos/hero_img.svg" />
  );
}
function HeroText() {
  return (
    <p className={styles.text}>
      نحن شركائك التقنيين نشيل عنك هم الجانب التقني كاملا من اعداد البيئه
      المناسبه ، الموارد والتطوير المستمر <br />
      لمنتجتك التقني ونصبح السي تي او لشركتك. ركز على البزنس وخل التقنيه علينا.
    </p>
  );
}
