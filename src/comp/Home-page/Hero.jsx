import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.video}>
        <source src="./assets/videos/StartVideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.videoContainer}>
        <img
          className={styles.image}
          src="/assets/images/photos/hero_img.svg"
        />
        <p className={styles.text}>
          نحن شركائك التقنيين نشيل عنك هم الجانب التقني كاملا من اعداد البيئه
          المناسبه ، الموارد والتطوير المستمر <br />
          لمنتجتك التقني ونصبح السي تي او لشركتك. ركز على البزنس وخل التقنيه
          علينا.
        </p>
        <button className={styles.button}>قدم طلب شراكة؟</button>
      </div>
    </div>
  );
}
