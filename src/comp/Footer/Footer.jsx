import styles from "./Footer.module.css";

export default function Footer() {
  const options = [
    {
      title1: "الموقع الالكتروني",
      title2: "من نحن",
      title3: "خدماتنا",
    },
    {
      title1: "الشركة",
      title2: "حول",
      title3: "المدونة",
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
              title2={option.title2}
              title3={option.title3}
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
        <img src="/assets/icons/logo.svg" alt="logo" />
        <img src="/assets/images/صانعي الاحلام.svg" alt="image" />
      </a>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
    </div>
  );
}

function Options({ title1, title2, title3 }) {
  return (
    <div className={styles.optionContainer}>
      <a href="#" className={styles.option}>
        <h4> {title1}</h4>
      </a>
      <a className={styles.option}>
        <p>{title2}</p>
      </a>
      <a className={styles.option}>
        <p>{title3}</p>
      </a>
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
