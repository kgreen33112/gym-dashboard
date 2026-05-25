import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../assets/Logo.svg';
import { faEnvelope, faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";


function Navbar () {
    return (
        <div className="background-layer">
          <div className="content-layer">
            <div className="left-side">
              <img src={Logo} alt="Gym Pro logo" className="logo" />
              <div className="page-title">Dashboard</div>
            </div>
            <div className="right-side">
              <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" className="search-icon" />
                <input 
                  type="text" 
                  className="search-input"
                  placeholder="Search members..." 
                />
              </div>
              <div className="icon-container">
                <FontAwesomeIcon icon={faBell} size="lg" className="icon" />
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon" />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Navbar