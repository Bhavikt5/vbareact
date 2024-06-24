const UspBox = ({ image }) => {
  return (
    <div className="box">
      <img src={image} alt="one" />
      <div className="innerBox">
        <h4>Qualified Trainers</h4>
        <p>Stellar trainers who make learning permanent makeup a breeze!</p>
      </div>
    </div>
  );
};
export default UspBox;
