import { useState } from "react"

function ToggleSwitch({ label, description, defaultOn = false }) {
    const [isOn, setIsOn] = useState(defaultOn)

    return(
        <div className="setting-row">
            <div>
                <p className="toggle-label">{label}</p>
                <p className="toggle-description">{description}</p>
            </div>

            <button
                type="button"
                className={`toggle-switch ${isOn ? "on" : ""}`}
                onClick={() => setIsOn(!isOn)}
                aria-pressed={isOn}
            >
                <span className="toggle-thumb"></span>
            </button>
        </div>
    )
}

export default ToggleSwitch