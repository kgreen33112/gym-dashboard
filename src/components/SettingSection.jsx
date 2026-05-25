function SettingSection({ title, description, children }){
    return(
        <section className="setting-section">
            <div className="setting-section-header">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="setting-section-content">
                {children}
            </div>
        </section>
    )
}

export default SettingSection