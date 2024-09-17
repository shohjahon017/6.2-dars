import Address from "../Address";
import Car from "../Car";
import "./index.css";

function User(props) {
  const { firstName, lastName, phone, email, image, cars, address } =
    props.user;
  return (
    <div className="user">
      <img src={image} alt="" />
      <p className="name">
        {firstName} {lastName}
      </p>
      <div className="phone">
        <p>{email}</p>
        <p>{phone}</p>
      </div>{" "}
      <div className="addres">
        <p>{address.region}</p>
        <p>{address.zip}</p>
      </div>
      {cars.length > 0 &&
        cars.map(function (value, index) {
          return <Car car={value} key={index} />;
        })}
    </div>
  );
}

export default User;
