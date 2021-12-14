import "./home.scss";
import Navbar from "../navbar/Navbar";
import Featured from "../featured/Featured";
import List from "../list/List";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List page={1} />
      <List page={2} />
      <List page={3} />
      <List page={4} />
    </div>
  );
};

export default home;
