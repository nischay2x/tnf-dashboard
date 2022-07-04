import { useState } from "react";
import { TextField } from "./inputFields.jsx";


const Resume = () => {

  const [data, setData] = useState({
    peTitle: "", peInsti: "", peDesc: "", peYear: "",
    seTitle: "", seInsti: "", seDesc: "", seYear: "",
    pjTitle: "", pjPlace: "", pjDesc: "", pjYear: "",
    sjTitle: "", sjPlace: "", sjDesc: "", sjYear: ""
  });

  const onDataChange = (e) => {
    setData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div
      className="container h-100 py-4 d-flex flex-column"
      style={{ rowGap: "2rem" }}
    >
      <div>
        <h2 className="fw-600">About you</h2>
      </div>
      <div>
        <h5 className="fw-600">Primary Education</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Title" type="text" name="peTitle" value={data.peTitle} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Instituion" type="text" name="peInsti" value={data.peInsti} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Year" type="text" name="peYear" value={data.peYear} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 mb-3">
            <TextField
              label="Description" type="text" name="peDesc" value={data.peDesc} onChange={onDataChange}
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Secondary Education</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Title" type="text" name="seTitle" value={data.seTitle} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Instituion" type="text" name="seInsti" value={data.seInsti} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Year" type="text" name="seYear" value={data.seYear} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 mb-3">
            <TextField
              label="Description" type="text" name="seDesc" value={data.seDesc} onChange={onDataChange}
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Primary Job</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Title" type="text" name="pjTitle" value={data.pjTitle} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Workspace" type="text" name="pjPlace" value={data.pjPlace} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Year" type="text" name="pjYear" value={data.pjYear} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 mb-3">
            <TextField
              label="Description" type="text" name="pjDesc" value={data.pjDesc} onChange={onDataChange}
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Secondary Job</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Title" type="text" name="sjTitle" value={data.sjTitle} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Workspace" type="text" name="sjPlace" value={data.sjPlace} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField
              label="Year" type="text" name="sjYear" value={data.sjYear} onChange={onDataChange}
            />
          </div>
          <div className="col-12 py-2 mb-3">
            <TextField
              label="Description" type="text" name="sjDesc" value={data.sjDesc} onChange={onDataChange}
            />
          </div>
        </div>
      </div>
      <div className="d-flex pb-4">
        <button className="btn m-auto px-4 edit-btn">Edit</button>
      </div>
    </div>
  );
};
export default Resume;
