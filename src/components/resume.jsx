import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Resume = () => {
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
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Title"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Instituion"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Year"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 mb-3 px-0">
            <TextField
              label="Description"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Secondary Education</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Title"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Instituion"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Year"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 mb-3 px-0">
            <TextField
              label="Description"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Primary Job</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Title"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Workspace"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Year"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 mb-3 px-0">
            <TextField
              label="Description"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Secondary Job</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Title"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Workspace"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Year"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 mb-3 px-0">
            <TextField
              label="Description"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn m-auto px-4 edit-profile-btn">Edit</button>
      </div>
    </div>
  );
};
export default Resume;
