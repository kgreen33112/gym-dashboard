function SettingField({ label, value, options }) {
    return (
        <label className="setting-row">
            <span className="field-label">{label}</span>

            <select className="field-options" defaultValue={value}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default SettingField