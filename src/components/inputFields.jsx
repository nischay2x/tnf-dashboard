import "./styles/inputFields.css";
import { useState, useRef, useEffect } from "react";

export function TextField({ type, label, value, onChange, name, className }) {
    return (
        <div className={`ci-wrap ${className}`}>
            <input type={type} value={value} onChange={onChange} name={name} className={value ? 'active' : ''} />
            <label>{label}</label>
        </div>
    )
}

export function Select({ label, value, onChange, name, className, options }) {
    return (
        <div className={`ci-wrap ${className}`}>
            <select name={name} value={value} onChange={onChange} className={value ? 'active' : ''}>
                <option defaultValue ></option>
                {
                    options.map((o, i) => <option key={i} value={o.value}>{o.text}</option>)
                }
            </select>
            <label>{label}</label>
        </div>
    )
}

export function Autofill({ label, value, onChange, name, className, list }) {
    return (
        <div className={`ci-wrap ${className}`}>
            <input type="text" list={`dl-${name}`} value={value} onChange={onChange} name={name} className={value ? 'active' : ''} />
            <label>{label}</label>
            <datalist id={`dl-${name}`}>
                {list.map((l, i) => <option key={i} value={l} />)}
            </datalist>
        </div>
    )
}

export function DragDropFile({ onChange, name, value, idx }) {
    const [dragActive, setDragActive] = useState(false);
    const [image, setImage] = useState(value);
    const inputRef = useRef(null);

    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const url = URL.createObjectURL(e.dataTransfer.files[0])
            setImage(url)
        }
    };

    useEffect(() => {
        let event = { target: { name: name, value: image } };
        if(idx >= 0) {
            console.log("idx--", idx);
            onChange(event, idx);
        } 
        else onChange(event)
    }, [image])

    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setImage(url)
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div id="form-file-upload" onDragEnter={handleDrag} style={{ backgroundImage: `url(${image})`}} >
            {
                image ? 
                <>
                    <button className="btn btn-sm delete-btn p-abs" style={{ right: 0, top: 0 }} onClick={() => { setImage("") }} >&#10006;</button>
                </>
                : <>
                    <input ref={inputRef} type="file" id="input-file-upload" multiple={false} onChange={handleChange} />
                    <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                        <div>
                            <p>Drag and drop your file here or</p>
                            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
                        </div>
                    </label>
                </>
            }
            {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
        </div>
    );
};