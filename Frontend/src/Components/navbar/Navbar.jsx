import "./navbar.scss";
import { Notifications, ArrowDropDown, Search } from "@mui/icons-material";
import { LoginButton } from "../auth0/Login";
import { LogoutButton } from "../auth0/Logout";
import { Profile } from "../auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

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
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon" />
          {isAuthenticated ? (
            
            <div className="profile">
              <Profile />
              <div className="options">
                <span>Options</span>
                <LogoutButton className="logout" />
              </div>
              <ArrowDropDown className="icon"/>
            </div>
            
          ) : (
            <LoginButton className="login"/>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
