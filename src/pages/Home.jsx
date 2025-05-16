import Hero from "../comp/Home-page/Hero";
import How from "../comp/Home-page/How";
import Why from "../comp/Home-page/Why";
import styles from "./Home.module.css";
import Add from "../comp/Home-page/Add";
import LatestProject from "../comp/Home-page/Latest-Projects/Latest_projects";
import ProjectPricingExamples from "../comp/Home-page/ProjectPricingExamples";
import AboutTheCompany from "../comp/Home-page/AboutTheCompany";
import LatestArticles from "../comp/Home-page/Latest_articles";

export default function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <How />
      <LatestProject />
      <Add />
      <ProjectPricingExamples />
      <AboutTheCompany />
      {/* <LatestArticles /> */}
    </div>
  );
}
