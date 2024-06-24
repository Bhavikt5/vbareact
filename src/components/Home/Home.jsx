import BrandLogo from "./BrandLogo";
import CourseModule from "./CourseModules";
import Faqs from "./FAQ";
import Hero from "./Hero";
import WhyVictress from "./WhyVictress";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandLogo />
      <WhyVictress />
      <CourseModule modules="Modules" />
      <Faqs />
    </>
  );
};

export default Home;
