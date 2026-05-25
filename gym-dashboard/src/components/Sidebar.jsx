import { NavLink } from "react-router-dom";
import { faCalendar, faCircleUser, faGear, faHouse, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="user-profile">
                <FontAwesomeIcon icon={faCircleUser} className="avatar-icon" size="3x" />
                <div className="user-name">Sarah Johnson</div>
            </div>
            <div className="side-navigation">
                <FontAwesomeIcon icon={faHouse} className="nav-item" size="lg" />
                <NavLink to="/" className="nav-text">Home</NavLink>
                <FontAwesomeIcon icon={faPeopleGroup} className="nav-item" size="lg" />
                <NavLink to="/members" className="nav-text">Members</NavLink>
                <FontAwesomeIcon icon={faCalendar} className="nav-item" size="lg" />
                <NavLink to="/schedule" className="nav-text">Class Schedule</NavLink>
                <FontAwesomeIcon icon={faGear} className="nav-item" size="lg" />
                <NavLink to="/settings" className="nav-text">Settings</NavLink>
            </div>
        </aside>
    )
}

export default Sidebar