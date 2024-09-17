import "./index.css";

function Car(props) {
  const { car } = props;
  return <span className="car">{car}</span>;
}

export default Car;
