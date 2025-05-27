import ComponentTitle from "../../comp/ComponentTitle";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.services}>
      <ComponentTitle title1={"خدماتنا"} />
      <p>نقدم خدمة متكاملة من التصميم الى البرمجة والاستضافة</p>
      <ServicesCard />
      <img src="../assets/images/photos/Group 3.svg" className={styles.img} />
    </div>
  );
}

function ServicesCard() {
  const dataServices = [
    {
      icon: "/assets/icons/services/الهوية البصرية.svg",
      title: " تصميم الهوية البصرية",
      desc: "هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه.",
    },
    {
      icon: "/assets/icons/services/برمجة المواقع.svg",
      title: " تصميم وبرمجة التطبيقات",
      desc: "هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه.",
    },
    {
      icon: "/assets/icons/services/برمجة التطبيقات.svg",
      title: " تصميم وبرمجة المواقع",
      desc: "هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه.",
    },
  ];

  return (
    <div className={styles.servicesCard}>
      {dataServices.map((service, index) => (
        <div className={styles.container} key={index}>
          <img src={service.icon} />
          <h2>{service.title}</h2>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  );
}
