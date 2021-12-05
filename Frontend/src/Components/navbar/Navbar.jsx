import "./navbar.scss";
import { Notifications, ArrowDropDown, Search } from "@mui/icons-material";
import { LoginButton } from "../auth0/Login";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://img.huffingtonpost.com/asset/5e1d9ca3210000530014a453.jpeg?cache=jAElMMUneT&ops=1778_1000"
            alt=""
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search />
          <span>KID</span>
          <Notifications />
          <LoginButton />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
