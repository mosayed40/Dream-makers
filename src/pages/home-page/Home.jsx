import styles from "./Home.module.css";
import Hero from "../../components/Home-page/Hero";
import How from "../../components/Home-page/How";
import Why from "../../components/Home-page/Why";
import Add from "../../components/Home-page/Add";
import LatestProject from "../../components/Home-page/Latest-Projects/Latest_projects";
import ProjectPricingExamples from "../../components/Home-page/ProjectPricingExamples";
import AboutTheCompany from "../../components/Home-page/AboutTheCompany";
import LatestArticles from "../../components/Home-page/Latest_articles";

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
      <LatestArticles />
    </div>
  );
}
