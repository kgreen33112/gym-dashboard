function UsageBar({ label, value, total, unit }) {
    const percent = Math.round((value / total) * 100)

    return (
        <div className="usage-bar-card">
            <div className="usage-bar-header">
                <p>{label}</p>
                <span>{value} / {total} {unit}</span>
            </div>

            <div className="usage-bar-track">
                <div
                    className="usage-bar-fill"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>

            <p className="usage-bar-percent">{percent}% used</p>
        </div>
    )
}

export default UsageBar