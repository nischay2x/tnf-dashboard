import { useState } from "react";
import { TextField, Select } from "./inputFields.jsx";

const About = () => {

  const [data, setData] = useState({
    jobProfile: "", jobDesc: "", mobile: "", dob: "",
    email: "", city: "", website: "", degree: "",
    clients: "", projects: "", awards: ""
  });

  const degreeOptions = [
    { value: "Bachelor", text: "Bachelor" },
    { value: "Master", text: "Master" }
  ]

  const onDataChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="container h-100 py-y d-flex flex-column justify-content-around">
      <div>
        <h2 className="fw-600">About you</h2>
      </div>
      <div>
          <div className="col-12 py-2 mb-3">
            <TextField label="Job Profile" type="text" value={data.jobProfile} onChange={onDataChange} name="jobProfile" />
          </div>
          <div className="col-12 py-2 mb-3">
            <TextField label="Job Description" type="text" value={data.jobDesc} onChange={onDataChange} name="jobDesc" />
          </div>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField label="Mobile" type="tel" value={data.mobile} onChange={onDataChange} name="mobile" />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField label="Date of Birth" type="date" value={data.dob} onChange={onDataChange} name="dob" />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <Select label="Academic Degree" name="degree" value={data.degree} onChange={onDataChange} options={degreeOptions} />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Email" type="email" value={data.email} onChange={onDataChange} name="email"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="City" type="text" value={data.city} onChange={onDataChange} name="city"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Website" type="url" value={data.website} onChange={onDataChange} name="website"
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Client details</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Clients" type="number" value={data.clients} onChange={onDataChange} name="clients"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Projects" type="number" value={data.projects} onChange={onDataChange} name="projects"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Awards" type="number" value={data.awards} onChange={onDataChange} name="awards"
            />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn m-auto px-4 edit-btn">Edit</button>
      </div>
    </div>
  );
};
export default About;
