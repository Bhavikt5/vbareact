import { FaGears } from "react-icons/fa6";

const Wip = () => {
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FaGears size={140} />
      <h1 style={{ textAlign: "center" }}>Page in Development </h1>;
    </div>
  );
};

export default Wip;
