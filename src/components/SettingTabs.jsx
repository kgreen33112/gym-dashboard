function SettingTabs({ tabs, activeTab, setActiveTab }) {
    return (
        <div className="setting-tabs">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`setting-tab ${activeTab === tab ? "active": ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default SettingTabs