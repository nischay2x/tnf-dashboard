import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const About = () => {
  return (
    <div className="container h-100 py-y d-flex flex-column justify-content-around">
      <div>
        <h2 className="fw-600">About you</h2>
      </div>
      <div>
        <div className="col-12 py-2 mb-3 px-0">
          <TextField
            label="Job Profile"
            variant="outlined"
            className="w-100 bg-white"
          />
        </div>
        <div className="col-12 py-2 mb-3 px-0">
          <TextField
            label="Job Description"
            variant="outlined"
            className="w-100 bg-white"
          />
        </div>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Mobile"
              type="tel"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            {/* <TextField
              variant="outlined"
              label="Date of Birth"
              type="date"
              className="w-100 bg-white"
            /> */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of Birth"
                value={null}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="w-100 bg-white"
                    helperText={params?.inputProps?.placeholder}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <FormControl fullWidth>
              <InputLabel id="academic-degree-select">
                Academmic Degree
              </InputLabel>
              <Select
                labelId="academic-degree-select"
                label="Academic Degree"
                className="w-100 bg-white"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              variant="outlined"
              label="Email"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              variant="outlined"
              label="City"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              variant="outlined"
              label="Website"
              className="w-100 bg-white"
            />
          </div>
        </div>
        <br />
        <h5 className="fw-600">Client details</h5>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              label="Clients"
              type="number"
              variant="outlined"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              variant="outlined"
              label="Projects"
              className="w-100 bg-white"
            />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 small-inputs">
            <TextField
              variant="outlined"
              label="Awards"
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
export default About;
