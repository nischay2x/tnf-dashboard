import { useEffect, useState } from "react";
import { DragDropFile, TextField } from "./inputFields";

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([
        { name: "", profile: "", desc: "", image: "" }
    ]);

    const [focusedData, setFocusedData] = useState({
        name: "", profile: "", desc: "", image: "", index: ""
    })

    const onInputChange = (e, i) => {
        setFocusedData(prev => ({...prev, [e.target.name]: e.target.value, index: i}))
        let temp = testimonials;
        temp[i] = { ...temp[i], [e.target.name]: e.target.value };
        setTestimonials(temp);
    }

    // useEffect(() => {
    //     console.log("tts--", testimonials);
    //     console.log("fds--", focusedData);
    // }, [testimonials, focusedData])

    useEffect(() => {
        if(focusedData.index >= 0){
            setFocusedData(testimonials[focusedData.index] || {
                name: "", profile: "", desc: "", image: "", index: ""
            })
        }
    }, [focusedData.index])

    const onAddMore = () => {
        setTestimonials(prev => [...prev, { name: "", profile: "", desc: "", image: "" }])
    }

    const deleteOne = (i) => {
        if(i === 0) return;
        let temp = testimonials.filter((_, idx) => i !== idx)
        setTestimonials(temp)
    }

    return (
        <div className="container py-4">
            <div>
                <h2 className="fw-600">Testimonials</h2>
            </div>
            <br />
            <div>
                {
                    testimonials.map((t, i) => (
                        <div key={i} className="d-flex flex-wrap rg-1 px-0 py-2 p-rel my-4 border rounded">
                            <button className="btn btn-sm delete-btn p-abs" onClick={() => { deleteOne(i) }} style={{ right: '-1rem', top: '-1rem' }}>&#10006;</button>
                            <div className="col-12 py-2 col-md-6">
                                <TextField name="name" value={focusedData.index === i? focusedData.name : t.name} onChange={(e) => { onInputChange(e, i) }} label="Client Name" />
                            </div>
                            <div className="col-12 py-2 col-md-6">
                                <TextField name="profile" value={focusedData.index === i? focusedData.profile : t.profile} onChange={(e) => { onInputChange(e, i) }} label="Client Profile" />
                            </div>
                            <div className="col-12 py-2">
                                <TextField name="desc" value={focusedData.index === i? focusedData.desc : t.desc} onChange={(e) => { onInputChange(e, i) }} label="Client Description" />
                            </div>
                            <div className="col-12 py-2 col-md-6 col-lg-6 col-xl-4">
                                <DragDropFile onChange={onInputChange} idx={i} name="image" value={focusedData.index === i? focusedData.image : t.image} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex">
                <button className="btn m-auto px-4 edit-btn"
                    onClick={onAddMore}
                >Add more</button>
            </div>
        </div>
    )
}

export default Testimonial;