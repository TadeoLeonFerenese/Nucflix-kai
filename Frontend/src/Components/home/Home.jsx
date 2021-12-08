import "./home.scss";
import Navbar from "../navbar/Navbar";
import Featured from "../featured/Featured";
import List from "../list/List";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default home;
