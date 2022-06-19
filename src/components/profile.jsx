export default function Profile() {
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
        <h5 className="fw-600">Social details</h5>
        <div className="col-12 py-2 mb-3 px-0">
          <input className="form-control" />
        </div>
        <div className="d-flex flex-wrap rg-1 px-0">
          <div className="col-12 py-2 col-md-6 col-lg-4 social-inputs">
            <input className="form-control" />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 social-inputs">
            <input className="form-control" />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 social-inputs">
            <input className="form-control" />
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-4 social-inputs">
            <input className="form-control" />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn m-auto px-4 edit-profile-btn">Edit</button>
      </div>
    </div>
  );
}
