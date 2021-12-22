import "./home.scss";
import Navbar from "../../Components/navbar/Navbar";
import Featured from "../../Components/featured/Featured"
import List from "../../Components/list/List"
import Footer from "../../Components/footer/Footer"

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
