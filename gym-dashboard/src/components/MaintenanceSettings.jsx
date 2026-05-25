import SettingField from "./SettingField";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import UsageBar from "./UsageBar";

function MaintenanceSettings () {
    return (
        <div className="maintenance-content">
            <SettingSection
                title="Maintenance Settings"
            >
                <UsageBar
                    label="Storage Available"
                    value={68}
                    total={100}
                    unit="GB"
                />

                <UsageBar
                    label="Network Usage"
                    value={42}
                    total={100}
                    unit="%"
                />

                <SettingField
                    label="Check for Updates"
                    value="Weekly"
                    options={["Daily", "Weekly", "Monthly"]}
                />
                <SettingField
                    label="Perform Backup Logs"
                    value="Weekly"
                    options={["Daily", "Weekly", "Monthly"]}
                />
                <SettingField
                    label="Scheduled Time to Back Up Logs"
                    value="2:00 AM"
                    options={["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM"]}
                />
                <SettingField
                    label="Generate and Upload System Data"
                    value="Daily"
                    options={["Daily", "Weekly", "Monthly"]}
                />
                <ToggleSwitch
                    label="Back Up User Logs"
                    description="Enable Back Up of Logs"
                    defaultOn={false}
                />
                <SettingField
                    label="System Report Generation Time"
                    value="11:45 PM"
                    options={["11:00 PM", "11:15 PM", "11:30 PM", "11:45 PM", "12:00 AM"]}
                />
                <SettingField
                    label="Scheduled Maintenance Time"
                    value="12:00 AM"
                    options={["11:00 PM", "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM"]}
                />
                <ToggleSwitch
                    label="Show System Logs"
                    description="Allow admins to view logs"
                    defaultOn={true}
                />
            </SettingSection>
        </div>
    )
}

export default MaintenanceSettings