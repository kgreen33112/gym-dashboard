import Inchworm from '../assets/Inchworm.png';

function RecentActivity() {
    return (
        <div className="activity-container">
            <h2 className="section-title">Recent Activity:</h2>
            <div className="activity-item">
                <img src={Inchworm} alt="Bullet-Point Image" className="inchworm-point" width="20" height="20" />
                <div className="timestamp">5:30pm</div>
                <div className="activity-text">Sarah checked in</div>
            </div>
            <div className="activity-item">
                <img src={Inchworm} alt="Bullet-Point Image" className="inchworm-point" width="20" height="20" />
                <div className="timestamp">6:38pm</div>
                <div className="activity-text">Marcus upgraded membership</div>
            </div>
            <div className="activity-item">
                <img src={Inchworm} alt="Bullet-Point Image" className="inchworm-point" width="16" height="16" />
                <div className="timestamp">7:01pm</div>
                <div className="activity-text">New prospect booked a free trial</div>
            </div>
        </div>
    )
}

export default RecentActivity