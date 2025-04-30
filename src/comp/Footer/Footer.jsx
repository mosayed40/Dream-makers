import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        <img src="/assets/images/photos/Group.svg" className={styles.img}></img>
        <div className={styles.communication}>
          <span>
            <a className={styles.logo}>
              <img src="/assets/icons/logo.svg" alt="logo" />
              <img src="/assets/images/صانعي الاحلام.svg" alt="image" />
            </a>
            <a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam{" "}
              </p>
            </a>
          </span>
          <span>
            <a>
              <h4>الموقع الالكتروني</h4>
            </a>
            <a>
              <p>من نحن</p>
            </a>
            <a>
              <p>خدماتنا</p>
            </a>
          </span>

          <span>
            <a>
              <h4> الشركة </h4>
            </a>
            <a>
              <p>حول</p>
            </a>
            <a>
              <p>المدونة</p>
            </a>
          </span>

          <span>
            <a>
              <h4> تواصل معنا </h4>
            </a>
            <a>
              <p>+0201091815177</p>
            </a>
            <a>
              <p>moustafa.2650@gmail.com</p>
            </a>
          </span>
        </div>
        <div className={styles.social_media_container}>
          <a>
            <img src="../assets/icons/media/YouTube.svg" alt="icon"></img>
          </a>
          <a>
            <img src="../assets/icons/media/LinkedIn.svg" alt="icon"></img>
          </a>
          <a>
            <img src="../assets/icons/media/Instagram.svg" alt="icon"></img>
          </a>
          <a>
            <img src="../assets/icons/media/Twitter.svg" alt="icon"></img>
          </a>
          <a>
            <img src="../assets/icons/media/Facebook.svg" alt="icon"></img>
          </a>
        </div>
        <span className={styles.brack}></span>
        <p>حقوق النشر محفوظة © 2023 `❣` صانعى الاحلام.</p>
      </div>
    </footer>
  );
}
