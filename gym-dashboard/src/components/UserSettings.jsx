import AccountFieldEditor from "./AccountFieldEditor";
import SettingField from "./SettingField";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";

function UserSettings () {
    return (
        <div className="user-content">
            <SettingSection
                title="User Settings"
            >
                <ToggleSwitch
                    label="Profile Picture Uploads"
                    description="Allow users to upload profile pictures"
                    defaultOn={true}
                />
                <SettingField
                    label="Size Limit for Profile Picture"
                    value="4 MB - Default"
                    options={["4 MB - Default", "5 MB", "10 MB"]}
                />
                <SettingField
                    label="System Font"
                    value="Open Sans"
                    options={["Open Sans", "Montserrat", "Times New Roman", "Arial", "Roboto"]}
                />
                <ToggleSwitch
                    label="Notifications"
                    description="Automatically send notifications"
                    defaultOn={true}
                />
            </SettingSection>
            <SettingSection
                title="Account Creation"
                description="Customize the fields users will provide when creating an account"
            >
                <AccountFieldEditor
                    number={1}
                    fieldTitle="Email Address"
                    fieldType="Text"
                    charLimit="25-Default"
                />

                <AccountFieldEditor
                    number={2}
                    fieldTitle="First Name"
                    fieldType="Text"
                    charLimit="25-Default"
                />
                <AccountFieldEditor
                    number={3}
                    fieldTitle="Last Name"
                    fieldType="Text"
                    charLimit="25-Default"
                />
            </SettingSection>
        </div>
    )
}

export default UserSettings