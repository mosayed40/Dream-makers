import ComponentTitle from "../ComponentTitle";
import styles from "./How.module.css";

export default function How() {
  const howSteps = [
    {
      icon: "/assets/icons/icon/iconPresentation.svg",
      title: "قدم طلب شراكة",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma",
      img: "/assets/icons/icon/iconBreak.svg",
    },
    {
      icon: "/assets/icons/icon/iconReview.svg",
      title: "مراجعة الطلب",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma",
      img: "/assets/icons/icon/iconBreak.svg",
    },
    {
      icon: "/assets/icons/icon/iconInterview.svg",
      title: "مقابلة شخصية",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma",
      img: "/assets/icons/icon/iconBreak.svg",
    },
    {
      icon: "/assets/icons/icon/iconSignature.svg",
      title: "توقيع العقد",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma",
    },
  ];
  return (
    <div className={styles.HowContainer}>
      <ComponentTitle title1={"كيف يتم الامر؟"} />
      <div className={styles.HowSection}>
        {howSteps.map((step, index) => (
          <HowSection
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            img={step.img}
          />
        ))}
      </div>
      <img src="/assets/images/photos/Group2.svg" className={styles.img} />
    </div>
  );
}

function HowSection({ icon, title, description, img }) {
  return (
    <>
      <div className={styles.section}>
        <img src={icon} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={img} />
    </>
  );
}
