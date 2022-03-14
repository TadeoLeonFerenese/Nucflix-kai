import "./home.scss";
import Navbar from "../../Components/navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import List from "../../Components/list/List";
import Footer from "../../Components/footer/Footer";
import List2 from "../../Components/list2/List2";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List page={1} />
      <List page={2} />
      <List page={3} />
      <List page={4} />
      <List2 />
      <Footer />
    </div>
  );
};

export default home;
