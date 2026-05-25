import SettingField from "./SettingField";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";

function SecuritySettings () {
    return (
        <div className="security-content">
            <SettingSection
                title="Security Settings"
                >
                    <ToggleSwitch
                        label="Two-Factor Authentication"
                        description="Require two-factor authentication"
                        defaultOn={true}
                    />
                    <ToggleSwitch
                        label="Encryption of Stored Data"
                        description="Encrypt stored data"
                        defaultOn={true}
                    />
                    <ToggleSwitch
                        label="Firewall Protection"
                        description="Enable firewall"
                        defaultOn={true}
                    />
                    <SettingField
                        label="Firewall Port Range"
                        value="0 - 1023"
                        options={["1024 - 65535", "0 - 1023", "1024-49151"]}
                    />
                    <SettingField
                        label="Login Attempts Before Account Lock"
                        value="5"
                        options={["5", "10", "15"]}
                    />
                    <SettingField
                        label="Data Encryption Method"
                        value="AES - Advanced Encryption Standard"
                        options={["Blowfish", "3DES - Triple DES", "RSA - Rivest-Shamir-Adleman", "ECC - Elliptic Curve Cryptography"]}
                    />
                    <ToggleSwitch
                        label="Incoming Traffic"
                        description="Allow incoming traffic"
                        defaultOn={true}
                    />
            </SettingSection>
        </div>
    )
}

export default SecuritySettings