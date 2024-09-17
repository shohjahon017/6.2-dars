import "./index.css";

function Address(props) {
  const { address } = props;
  return <span>{address.region}</span>;
}

export default Address;
