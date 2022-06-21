import React from "react";
import { TextField } from "./inputFields.jsx";
import { useState } from "react";

const Services = () => {

    const [services, setServices] = useState([{ name: "", info: "", desc: "" }]);

    const onServiceChange = (e, i) => {
        let temp = [...services];
        temp[i][e.target.name] = e.target.value;
        setServices(temp);
    }

    return (
        <div
            className="container h-100 py-4 d-flex flex-column"
            style={{ rowGap: "2rem" }}
        >
            <div>
                <h2 className="fw-600">Services</h2>
            </div>
            <div>
                {
                    services.map((s, i) => {
                        return (
                            <div className="d-flex flex-wrap rg-1 px-0" key={i}>
                                <div className="col-12 py-2 col-md-6 col-lg-6">
                                    <TextField type="value" value={s.name} label="Service Name" onChange={(e) => onServiceChange(e, i)} name="name" />
                                </div>
                                <div className="col-12 py-2 col-md-6 col-lg-6">
                                    <TextField type="text" value={s.info} label="Service Info" onChange={(e) => onServiceChange(e, i)} name="info" />
                                </div>
                                <div className="col-12 py-2 mb-3">
                                    <TextField type="text" value={s.desc} label="Service Description" onChange={(e) => onServiceChange(e, i)} name="desc" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex pb-4">
                <button className="btn m-auto px-4 edit-profile-btn">Edit</button>
            </div>
        </div>
    );
};
export default Services;
