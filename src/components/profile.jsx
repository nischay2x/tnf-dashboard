import { useState } from "react";
import { TextField } from "./inputFields.jsx";

const Profile = () => {

  const [user, setUser] = useState({ name: "", instagram: "", twitter: "", linkedin: "", facebook: "" });

  const onInputChange = (e) => {
    setUser(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  return (
    <div className="container py-4 d-flex flex-column h-100 justify-content-around">
      <div>
        <h2 className="fw-600">Profile info</h2>
      </div>
      <div className="d-flex align-items-center cg-2 py-4">
        <div className="profile-img"></div>
        <div className="profile-info">
          <span className="name">User Name</span>
          <span className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            gravida lorem viverra ac mauris. passion/profession
          </span>
        </div>
      </div>
      <div>
        <div className="col-12">
          <h5 className="fw-600">Social details</h5>
        </div>
        <div className="col-12 py-2 mb-3">
          <TextField name="name" type="text" onChange={onInputChange} value={user.name} label="Full Name" />
        </div>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField label="Instagram" type="text"  name="instagram" onChange={onInputChange} value={user.instagram} />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField label="Twitter" type="text" name="twitter" onChange={onInputChange} value={user.twitter} />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField label="Facebook" type="text" name="facebook" onChange={onInputChange} value={user.facebook} />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4">
            <TextField label="LinkedIn" type="text" name="linkedin" onChange={onInputChange} value={user.linkedin} />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn m-auto px-4 edit-btn">Edit</button>
      </div>
    </div>
  );
};
export default Profile;
