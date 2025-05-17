import styles from "./Home.module.css";
import Hero from "../../comp/Home-page/Hero";
import How from "../../comp/Home-page/How";
import Why from "../../comp/Home-page/Why";
import Add from "../../comp/Home-page/Add";
import LatestProject from "../../comp/Home-page/Latest-Projects/Latest_projects";
import ProjectPricingExamples from "../../comp/Home-page/ProjectPricingExamples";
import AboutTheCompany from "../../comp/Home-page/AboutTheCompany";
import LatestArticles from "../../comp/Home-page/Latest_articles";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* <Link to="/">الرئيسية</Link>
      <Link to="/about">about </Link>
      <Link to="/mo"> mo</Link> */}
      <Hero />
      <Why />
      <How />
      <LatestProject />
      <Add />
      <ProjectPricingExamples />
      <AboutTheCompany />
      <LatestArticles />
    </div>
  );
}
