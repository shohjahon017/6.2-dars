import UserList from "./assets/components/UserList";
import data from "./assets/data/data.json";

function App() {
  return (
    <div>
      <UserList data={data} />
    </div>
  );
}

export default App;
