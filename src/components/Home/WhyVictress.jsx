import Button from "./Button";
import Heading from "./Heading";
import UspBox from "./UspBox";
import "./WhyVictress.css";

const WhyVictress = () => {
  return (
    <>
      <Heading title="Why Us ?" margin={"3rem 0"} />
      <div className="whyUs">
        <div className="left">
          <img src="IMG_5344.webp" alt="image2" />
        </div>
        <div className="right">
          <div className="uspModule">
            <UspBox image="01.png" />
            <UspBox image="02.png" />
            <UspBox image="03.png" />
            <UspBox image="04.png" />
          </div>
          <Button text="Get Started" />
        </div>
      </div>
    </>
  );
};

export default WhyVictress;
