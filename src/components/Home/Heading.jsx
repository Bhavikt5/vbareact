import "./Heading.css";

const Heading = ({ title, margin }) => {
  return (
    <div className="headingDiv" style={{ margin: margin }}>
      <h3>{title}</h3>
      <hr />
    </div>
  );
};

export default Heading;
