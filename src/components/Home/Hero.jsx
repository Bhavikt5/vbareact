import Button from "./Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>Master Your Passion, Transform Yourself</h1>
        <p> YOUR LAUNCHPAD INTO THE WORLD OF PMU</p>

        <Button text={"Invest In You"} />
      </div>
      <div className="right">
        <img
          src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/IMG_7874-768x882.webp"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Hero;
