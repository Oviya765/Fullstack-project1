import { Link } from "react-router-dom";
import skctLogo from "../Assets/Images/skct-logo.png";
import whiteaccount from "../Assets/Images/black-theme-profile.png";
import "../Assets/Styles/Navigation1.css"
function Navigation1() {
    return (
        <nav className="nav-1-conatiner">
                <div className="skct-logo-conatiner">
                        <Link to="/"><img src={skctLogo} alt="skct-logo" /></Link>
                </div>
            <ul className="nav-1-ul">
                <div className="nav1-pages-conatainer">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/interview">Interview</Link>
                    </li>
                    <li>
                        <Link to="/account"><img src={whiteaccount} alt="profile" /></Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navigation1;
