import { faPeopleGroup, faClipboardCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AttendanceChart from "../components/AttendanceChart";
import StatCard from "../components/StatCard";
import RecentActivity from "../components/RecentActivity";

function DashboardOverview() {
    return(
        <div className="main-content">
            <h2 className="page-subtitle">Overview</h2>
            <div className="cards-container">
                <StatCard
                    title="Active Members"
                    icon={<FontAwesomeIcon icon={faPeopleGroup} />}
                    value="187"
                />
                <StatCard
                    title="Check-Ins Today"
                    icon={<FontAwesomeIcon icon={faClipboardCheck} />}
                    value="78"
                />
                <StatCard
                    title="Monthly Revenue"
                    icon={<FontAwesomeIcon icon={faDollarSign} />}
                    value="$14,000"
                />
            </div>
            <div className="dashboard-bottom">
                <div className="activity-panel">
                    <RecentActivity />
                </div>
                <div className="chart-panel">
                    <div className="attendance-title">
                        <h2>Attendance Overview:</h2>
                    </div>
                    <div className="chart-container">
                        <div className="chart-legend">
                            <div className="legend-item">
                                <div className="legend-color kids"></div>
                                <p>Kids</p>
                            </div>
                            <div className="legend-item">
                                <div className="legend-color adults"></div>
                                <p>Adults</p>
                            </div>
                            <div className="legend-item">
                                <div className="legend-color walkins"></div>
                                <p>Walk-Ins</p>
                            </div>
                        </div>
                        <AttendanceChart />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashboardOverview