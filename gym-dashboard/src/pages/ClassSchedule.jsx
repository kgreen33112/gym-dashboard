import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarDays, faChildReaching, faDiamond, faFilter, faHeart, faHexagon, faK, faPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import StatCard from "../components/StatCard";

const classes = [
    {
        time: "5:00 AM",
        monday: {
            name: "Kickboxing",
            type: "striking"
        }, 
        tuesday: {
            name: "BJJ",
            type: "bjj"
        },
        wednesday: {
            name: "Kickboxing",
            type: "striking"
        },
        thursday: {
            name: "BJJ",
            type: "bjj"
        },
        friday: "", 
        saturday: "",
    },
    {
        time: "9:00 AM",
        monday: "",
        tuesday: "", 
        wednesday: "", 
        thursday: "", 
        friday: "",
        saturday: {
            name: "Cardio Kickboxing",
            type: "cardio"
        }
    },
    {
        time: "10:00 AM",
        monday: "",
        tuesday: "", 
        wednesday: "",
        thursday: "",
        friday: "", 
        saturday: {
            name: "Adult Open Mat",
            type: "bjj"
        },
    },
    {
        time: "4:40 PM",
        monday: {
            name: "Tiny Kids Striking",
            type: "striking"
        }, 
        tuesday: {
            name: "Tiny Kids BJJ",
            type: "bjj"
        },
        wednesday: {
            name: "Tiny Kids Striking",
            type: "striking"
        },
        thursday: {
            name: "Tiny Kids BJJ",
            type: "bjj"
        },
        friday: "", 
        saturday: "",
    },
    {
        time: "5:00 PM", 
        monday: "", 
        tuesday: "", 
        wednesday: "", 
        thursday: "", 
        friday: {
            name: "Adult Combat BJJ",
            type: "bjj"
        },
        saturday: "",
    },
    {
        time: "5:30 PM",
        monday: {
            name: "Little Kids Striking",
            type: "striking"
        }, 
        tuesday: {
            name: "Little Kids BJJ",
            type: "bjj"
        },
        wednesday: {
            name: "Little Kids Striking",
            type: "striking"
        },
        thursday: {
            name: "Little Kids BJJ",
            type: "bjj"
        },
        friday: "", 
        saturday: "",   
    },
    {
        time: "6:00 PM", 
        monday: "", 
        tuesday: "", 
        wednesday: "", 
        thursday: "", 
        friday: {
            name: "Adult Open Mat",
            type: "mma"
        },
    },
    {
        time: "6:15 PM",
        monday: {
            name: "Big Kids Striking",
            type: "striking"
        }, 
        tuesday: {
            name: "Big Kids BJJ",
            type: "striking"
        },
        wednesday: {
            name: "Big Kids Striking",
            type: "striking"
        },
        thursday: {
            name: "Big Kids BJJ",
            type: "striking"
        },
        friday: "", 
        saturday: "",  
    },
    {
        time: "7:00 PM",
        monday: {
            name: "Adult Combat BJJ",
            type: "bjj"
        }, 
        tuesday: {
            name: "Adult BJJ",
            type: "bjj"
        },
        wednesday: {
            name: "Adult BJJ",
            type: "bjj"
        },
        thursday: {
            name: "Adult No-Gi BJJ",
            type: "bjj"
        },
        friday: "", 
        saturday: "",  
    },
    {
        time: "8:10 PM",
        monday: "",
        tuesday: {
            name: "Adult MMA",
            type: "mma"
        },
        wednesday: {
            name: "Adult MMA",
            type: "mma"
        },
        thursday: {
            name: "Adult MMA",
            type: "mma"
        },
        friday: "",
        saturday: "",
    }
]

function ClassSchedule() {
    return (
        <div className="main-content">
            <div className="cards-container">
                <StatCard
                    title="Total Weekly Classes"
                    icon={<FontAwesomeIcon icon={faCalendarDays} />}
                    value="27"
                />
                <StatCard
                    title="Kids Classes"
                    icon={<FontAwesomeIcon icon={faChildReaching} />}
                    value="12"
                />
                <StatCard
                    title="Adult Classes"
                    icon={<FontAwesomeIcon icon={faUserGroup} />}
                    value="15"
                />
            </div>
            <div className="schedule-toolbar">
                <h2 className="page-subtitle">Weekly Schedule</h2>
                <div className="toolbar-text"><FontAwesomeIcon icon={faFilter} size="lg" />Filter</div>
                <button type="button" className="add-class" id="addClass"><FontAwesomeIcon icon={faPlus} size="lg" />Add Class</button>
            </div>
            
            <div className="schedule-page">
                <div className="table-container">
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th className="time-column">Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                            </tr>
                        </thead>

                        <tbody>
                            {classes.map((classItem, index) => (
                                <tr key={index}>
                                    <td>{classItem.time}</td>
                                    <td>{classItem.monday && (
                                        <div className="schedule-class">
                                            <span className={`class-pill ${classItem.monday.type}`}>
                                                {classItem.monday.type}
                                            </span>
                                            <p>{classItem.monday.name}</p>
                                        </div>
                                    )}</td>
                                    <td>{classItem.tuesday && (
                                        <div className="schedule-class">
                                            <span className={`class-pill ${classItem.tuesday.type}`}>
                                                {classItem.tuesday.type}
                                            </span>
                                            <p>{classItem.tuesday.name}</p>
                                        </div>
                                    )}</td>
                                    <td>{classItem.wednesday && (
                                        <div className="schedule-class">
                                            <span className={`class-pill ${classItem.wednesday.type}`}>
                                                {classItem.wednesday.type}
                                            </span>
                                            <p>{classItem.wednesday.name}</p>
                                        </div>
                                    )}</td>
                                    <td>{classItem.thursday && (
                                        <div className="schedule-class">
                                            <span className={`class-pill ${classItem.thursday.type}`}>
                                                {classItem.thursday.type}
                                            </span>
                                            <p>{classItem.thursday.name}</p>
                                        </div>
                                    )}</td>
                                    <td>{classItem.friday && (
                                        <div className="schedule-class">
                                            <span className={`class-pill ${classItem.friday.type}`}>
                                                {classItem.friday.type}
                                            </span>
                                            <p>{classItem.friday.name}</p>
                                        </div>
                                    )}</td>
                                    <td>{classItem.saturday && (
                                        <div className="schedule-class">
                                            <span className={`class-pill ${classItem.saturday.type}`}>
                                                {classItem.saturday.type}
                                            </span>
                                            <p>{classItem.saturday.name}</p>
                                        </div>
                                    )}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>        
        </div>
    )
}

export default ClassSchedule