import { useEffect, useState } from "react";
import { DragDropFile, TextField } from "./inputFields";

const Portfolio = () => {

    const [portfolios, setPortfolios] = useState([
        { name: "", category: "", image: "" }
    ]);

    const [focusedData, setFocusedData] = useState({
        name: "", category: "", image: "", index: ""
    })

    const onInputChange = (e, i) => {
        setFocusedData(prev => ({...prev, [e.target.name]: e.target.value, index: i}))
        let temp = portfolios;
        temp[i] = { ...temp[i], [e.target.name]: e.target.value };
        setPortfolios(temp);
    }

    // useEffect(() => {
    //     console.log("tts--", portfolios);
    //     console.log("fds--", focusedData);
    // }, [portfolios, focusedData])

    useEffect(() => {
        if(focusedData.index >= 0){
            setFocusedData(portfolios[focusedData.index] || {
                name: "", category: "", image: "", index: ""
            })
        }
    }, [focusedData.index])

    const onAddMore = () => {
        setPortfolios(prev => [...prev, { name: "", category: "", image: "" }])
    }

    const deleteOne = (i) => {
        if(!portfolios.length) return;
        let temp = portfolios.filter((_, idx) => i !== idx)
        setPortfolios(temp)
    }

    return (
        <div className="container py-4">
            <div>
                <h2 className="fw-600">Portfolio</h2>
            </div>
            <br />
            <div>
                {
                    portfolios.map((t, i) => (
                        <div key={i} className="d-flex flex-wrap rg-1 px-0 py-2 p-rel my-4 border rounded">
                            <div className="col-12 py-2 col-md-6">
                                <TextField name="name" value={focusedData.index === i? focusedData.name : t.name} onChange={(e) => { onInputChange(e, i) }} label="Portfolio Name" />
                            </div>
                            <div className="col-12 py-2 col-md-6">
                                <TextField name="category" value={focusedData.index === i? focusedData.category : t.category} onChange={(e) => { onInputChange(e, i) }} label="Portfolio Category" />
                            </div>
                            <div className="col-12 py-2 col-md-6 col-lg-6 col-xl-4">
                                <DragDropFile onChange={onInputChange} idx={i} name="image" value={focusedData.index === i? focusedData.image : t.image} />
                            </div>
                            <div className="col d-flex">
                                <div className="d-flex cg-1 mt-auto mb-3">
                                    <button className="btn edit-btn">Edit</button>
                                    <button className="btn delete-btn" onClick={() => { deleteOne(i) }}>Delete</button>
                                </div>
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

export default Portfolio;