import "./home.scss";
import Navbar from "../../Components/navbar/Navbar";
import Featured from "../../Components/featured/Featured";
// import List from "../../Components/list/List";
import Footer from "../../Components/footer/Footer";
import List2 from "../../Components/list2/List2";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List2 id="list1" />
      <List2 id="list2" />
      <List2 id="list3" />
      <List2 id="list4" />
      <List2 id="list5" />
      <Footer />
    </div>
  );
};

export default home;
