import "./home.scss";
import Navbar from "../navbar/Navbar";
import Featured from "../featured/Featured";
import List from "../list/List";
import Footer from "../footer/Footer"

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List page={1} />
      <List page={2} />
      <List page={3} />
      <List page={4} />
      <Footer />
    </div>
  );
};

export default home;
