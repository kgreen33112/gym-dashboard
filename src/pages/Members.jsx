import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const members = [
    {
        id: 1, 
        firstName: "Sarah", 
        lastName: "Johnson", 
        rank: "White", 
        membershipType: "Family of 3", 
        phoneNumber: "(123)-456-7890", 
        email: "sarahjohnson@example.com",
        status: "Current",
    },
    {
        id: 2, 
        firstName: "Tom", 
        lastName: "Johnson", 
        rank: "White", 
        membershipType: "Family of 3", 
        phoneNumber: "(123)-456-7891", 
        email: "tomjohnson@example.com",
        status: "Current",
    }, 
    {
        id: 3, 
        firstName: "Johnny", 
        lastName: "Johnson", 
        rank: "Gray-White", 
        membershipType: "Family of 3", 
        phoneNumber: "", 
        email: "",
        status: "Current",
    },
    {
        id: 4, 
        firstName: "Marcus", 
        lastName: "Lee", 
        rank: "Purple", 
        membershipType: "All-Access", 
        phoneNumber: "(123)-456-7892",
        email: "marcuslee@example.com",
        status: "Paused",
    },
    {
        id: 5, 
        firstName: "Emily", 
        lastName: "Carter", 
        rank: "Blue", 
        membershipType: "Foundation", 
        phoneNumber: "(123)-456-7893", 
        email: "emilycarter@example.com",
        status: "Current",
    },
    {
        id: 6, 
        firstName: "Kate", 
        lastName: "Leopold", 
        rank: "White", 
        membershipType: "Youth Unlimited", 
        phoneNumber: "",
        email: "", 
        status: "Paused",
    },
    {
        id: 7, 
        firstName: "Caleb", 
        lastName: "Smith", 
        rank: "White", 
        membershipType: "Youth Basic", 
        phoneNumber: "", 
        email: "", 
        status: "Current",
    },
    {
        id: 8,
        firstName: "Samson", 
        lastName: "Tsung",
        rank: "White", 
        membershipType: "All-Access",
        phoneNumber: "(123)-456-7895",
        email: "samsontsung@example.com",
        status: "Current",
    },
    {
        id: 9, 
        firstName: "Luke", 
        lastName: "Shield", 
        rank: "Blue", 
        membershipType: "Trial",
        phoneNumber: "(123)-456-7896",
        email: "lukeshield@example.com",
        status: "Trial",
    },
    {
        id: 10, 
        firstName: "Tom", 
        lastName: "Booker",
        rank: "Brown", 
        membershipType: "All-Access",
        phoneNumber: "(123)-456-7897",
        email: "tombooker@example.com",
        status: "Current",
    },
]

function Members() {
    return (
        <div className="main-content">
            <div className="members-toolbar">
                <h2 className="page-subtitle">Members</h2>
                <div className="toolbar-text"><FontAwesomeIcon icon={faFilter} size="lg" />Filter</div>
                
                <button type="button" className="add-member" id="addMember"><FontAwesomeIcon icon={faPlus} size="lg" />Add Member</button>
            </div>
            <div className="members-page">
                <div className="table-container">
                    <table className="members-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Rank</th>
                                <th>Membership Type</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {members.map((member) => (
                                <tr key={member.id}>
                                    <td>{member.firstName}</td>
                                    <td>{member.lastName}</td>
                                    <td>{member.rank}</td>
                                    <td>{member.membershipType}</td>
                                    <td>{member.phoneNumber}</td>
                                    <td>{member.email}</td>
                                    <td>
                                        <span className={`status-pill ${member.status.toLowerCase()}`}>
                                            {member.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>        
        </div>
    )
}

export default Members