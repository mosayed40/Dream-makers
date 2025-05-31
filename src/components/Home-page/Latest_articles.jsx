import ComponentTitle from "../ComponentTitle";
import styles from "./Latest_articles.module.css";

export default function LatestArticles() {
  const articles = [
    {
      img: "assets/images/photos/Article_Image.png",
      date: "10 يناير 2022",
      title: "إنشاء ألعاب tic tac toe باستخدام React JS",
    },
    {
      img: "assets/images/photos/Article_Image.png",
      date: "10 يناير 2022",
      title: "إنشاء ألعاب tic tac toe باستخدام React JS",
    },
    {
      img: "assets/images/photos/Article_Image.png",
      date: "10 يناير 2022",
      title: "إنشاء ألعاب tic tac toe باستخدام React JS",
    },
    {
      img: "assets/images/photos/Article_Image.png",
      date: "10 يناير 2022",
      title: "إنشاء ألعاب tic tac toe باستخدام React JS",
    },
    {
      img: "assets/images/photos/Article_Image.png",
      date: "10 يناير 2022",
      title: "إنشاء ألعاب tic tac toe باستخدام React JS",
    },
    {
      img: "assets/images/photos/Article_Image.png",
      date: "10 يناير 2022",
      title: "إنشاء ألعاب tic tac toe باستخدام React JS",
    },
  ];
  return (
    <section className={styles.latestArticles}>
      <ComponentTitle title1={"احدث المقالات"} />
      <div className={styles.latestArticlesContainer}>
        {articles.map((article, index) => (
          <LatestArticlesContainer
            key={index}
            img={article.img}
            date={article.date}
            title={article.title}
          />
        ))}
      </div>
    </section>
  );
}

function LatestArticlesContainer({ img, date, title }) {
  return (
    <div className={styles.latestArticlesTitle}>
      <img src={img} />
      <p>{date}</p>
      <span>{title} </span>
    </div>
  );
}
