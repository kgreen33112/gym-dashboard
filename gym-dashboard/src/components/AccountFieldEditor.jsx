function AccountFieldEditor({ number, fieldTitle, fieldType, charLimit }) {
    return (
        <div className="account-field-editor">
            <div className="field-editor-main">
                <div className="field-grid">
                    <p>{number}. Field Title</p>
                    <div className="editable-row">
                        <span>{fieldTitle}</span>
                        <button className="edit-btn">Edit</button>
                    </div>

                    <p>Field Description</p>
                    <div className="editable-row">
                        <span>Add a description</span>
                        <button className="edit-btn">Edit</button>
                    </div>

                    <p>Field Input Type</p>
                    <select defaultValue={fieldType}>
                        <option>Text</option>
                        <option>Email</option>
                        <option>Number</option>
                    </select>

                    <p>Input Characters Limit</p>
                    <select defaultValue={charLimit}>
                        <option>25-Default</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
            </div>

            <div className="field-editor-actions">
                <label>
                    <input type="checkbox" defaultChecked />
                        Require Field
                </label>

                <label>                        
                    <input type="checkbox" />
                        Hide Field
                </label>

                <button className="delete-field-btn">Delete Field</button>
            </div>
        </div>
    )
}

export default AccountFieldEditor