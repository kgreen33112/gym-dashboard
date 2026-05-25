function StatCard({ title, icon, value }) {
    return (
        <div className="stat-card">
            <div className="stat-card-header">
                <p>{title}</p>
                <span>{icon}</span>
            </div>

            <h2>{value}</h2>
        </div>
    )
}

export default StatCard