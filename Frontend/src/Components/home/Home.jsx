import "./home.scss";
import Navbar from "../navbar/Navbar";
import Featured from "../featured/Featured";

const home = () => {
  return (
    <div className="home">
      <Navbar />
     <Featured />
    </div>
  );
};

export default home;
