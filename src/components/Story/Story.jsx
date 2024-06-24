import Heading from "../Home/Heading";
import Artist from "./Artist";

const Story = () => {
  return (
    <>
      <Heading title={"Who We Are"} margin={"4rem 0 0"} />
      <p className="para">
        We’ll help you find your path to success in semi-permanent makeup with
        our cutting-edge training. We fuse the latest techniques with our unique
        program, ensuring you launch into the industry with confidence.
        Transform your passion into a thriving profession with us!
      </p>
      <Artist />
    </>
  );
};

export default Story;
