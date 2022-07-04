import "./styles/inputFields.css";

export function TextField ({type, label, value, onChange, name, className}) {
    return(
        <div className={`ci-wrap ${className}`}>
            <input type={type} value={value} onChange={onChange} name={name} className={value? 'active' : ''}/>
            <label>{label}</label>
        </div>
    )
}

export function Select ({ label, value, onChange, name, className, options }) {
    return(
        <div className={`ci-wrap ${className}`}>
            <select name={name} value={value} onChange={onChange} className={value? 'active' : ''}>
                <option defaultValue ></option>
                {
                    options.map((o, i) => <option key={i} value={o.value}>{o.text}</option>)
                }
            </select>
            <label>{label}</label>
        </div>
    )
}

export function Autofill ({ label, value, onChange, name, className, list }) {
    return (
        <div className={`ci-wrap ${className}`}>
            <input type="text" list={`dl-${name}`} value={value} onChange={onChange} name={name} className={value ? 'active' : ''} />
            <label>{label}</label>
            <datalist id={`dl-${name}`}>
                { list.map((l, i) => <option key={i} value={l} />) }
            </datalist>
        </div>
    )
}