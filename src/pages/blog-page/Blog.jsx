import styles from "./Blog.module.css";
import ComponentTitle from "../../comp/ComponentTitle";

export default function Blog() {
  return (
    <div className={styles.blog}>
      <ComponentTitle title1={"المدونة"} />
      <div className={styles.blogContent}>
        <Search />
        <Options />
      </div>
      <LatestArticles />
    </div>
  );
}
function Options() {
  return (
    <div className={styles.select}>
      <p>عرض الاحدث</p>
      <button>
        <img src="../assets/icons/icon/options.svg" />
      </button>
    </div>
  );
}
function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="بحث" />
      <button>
        <img src="../assets/icons/icon/search.svg" />
      </button>
    </div>
  );
}
function LatestArticles() {
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
    <div className={styles.latestArticles}>
      {articles.map((article, index) => (
        <div className={styles.container} key={index}>
          <img src={article.img} />
          <p>{article.date}</p>
          <span>{article.title} </span>
        </div>
      ))}
    </div>
  );
}
