// components
import Page from "../components/Page";
import HomeHero from "../components/home/HomeHero";
import Video from "../components/home/Video";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Company from "../components/home/Company";
import Service from "../components/home/Service";
import Book from "../components/home/Book";
import Article from "../components/home/Article";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home page">
      <HomeHero />
      <Video />
      <About />
      <Experience />
      <Company />
      <Service />
      <Book />
      <Article />
    </Page>
  );
}
