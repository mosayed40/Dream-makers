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
      <img src="../assets/images/photos/Group 3.svg" className={styles.img} />
    </div>
  );
}

function Options() {
  return (
    <select className={styles.select}>
      <option>عرض الاحدث</option>
      <option> أهم المشاريع</option>
      <option>عرض الاقدم</option>
      <option>عرض حسب التصنيف</option>
      {/* <button>
        <img src="../assets/icons/icon/options.svg" />
      </button> */}
    </select>
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
