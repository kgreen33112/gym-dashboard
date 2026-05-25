import { useState } from 'react'
import SettingTabs from '../components/SettingTabs'
import GeneralSettings from '../components/GeneralSettings'
import UserSettings from '../components/UserSettings'
import MaintenanceSettings from '../components/MaintenanceSettings'
import SecuritySettings from '../components/SecuritySettings'

function Settings() {
    const tabs = ["General", "User", "Maintenance", "Security"]
    const [activeTab, setActiveTab] = useState("General")
    
    return (
        <section className="main-content">
            <div className="settings-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`settings-tab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
            {activeTab === "General" && <GeneralSettings />}
            {activeTab === "User" && <UserSettings />}
            {activeTab === "Maintenance" && <MaintenanceSettings />}
            {activeTab === "Security" && <SecuritySettings />}
        </section>
    )
}

export default Settings