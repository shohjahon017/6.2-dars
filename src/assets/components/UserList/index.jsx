import User from "../User";
import "./index.css";

function UserList(props) {
  const { data } = props;

  return (
    <div className="container">
      {data.length > 0 &&
        data.map(function (value, index) {
          return <User user={value} key={index} />;
        })}
    </div>
  );
}

export default UserList;
