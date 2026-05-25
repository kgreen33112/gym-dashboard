import SettingField from "./SettingField";
import SettingSection from "./SettingSection";
import SettingTabs from "./SettingTabs";
import ToggleSwitch from "./ToggleSwitch";

function GeneralSettings () {
    return (
        <div className="general-content">
            <SettingSection
                title="General"
                description="General settings for admin"
                >
                    <SettingField
                        label="System Language"
                        value="English"
                        options={["English", "Spanish", "French", "German", "Mandarin", "Arabaic", "Portuguese"]}
                    />
                    <SettingField
                        label="Admin Dashboard Theme"
                        value="Light Mode"
                        options={["Light Mode", "Dark Mode"]}
                    />
                    <SettingField
                        label="Time Zone"
                        value="CST - Central Standard Time"
                        options={["CST - Central Standard Time", "EST - Eastern Standard Time", "MST - Mountain Standard Time", "PST - Pacific Standard Time"]}
                    />
                    <SettingField
                        label="System Font"
                        value="Open Sans"
                        options={["Open Sans", "Montserrat", "Times New Roman", "Arial", "Roboto"]}
                    />
                    <ToggleSwitch
                        label="Online User Sign-Up"
                        description="Allow new users to sign up online"
                        defaultOn={true}
                    />
                    <SettingField
                        label="Date & Time Format"
                        value="MM/DD/YYYY    01:00"
                        options={["MM/DD/YYYY    01:00", "DD/MM/YYYY    13:00"]}
                    />
                    <ToggleSwitch
                        label="Notifications"
                        description="Allow system notifications"
                        defaultOn={true}
                    />
                    <SettingField
                        label="System Update Frequency"
                        value="Monthly"
                        options={["Monthly", "Weekly", "Daily"]}
                    />
                    <SettingField
                        label="Security Check Frequency"
                        value="Weekly"
                        options={["Monthly", "Weekly", "Daily"]}
                    />
                    <SettingField
                        label="Report File Format for Download"
                        value="PDF"
                        options={["PDF", "CSV", "XLSX"]}
                    />
                </SettingSection>
                
        </div>
    )
}

export default GeneralSettings