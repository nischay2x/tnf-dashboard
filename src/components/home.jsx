const Home = () => {
  return (
    <div className="d-flex w-100 h-100">
      <div className="m-auto">
        <div className="text-center">
          <h1 className="display-4 fw-600">Welcome User!!</h1>
        </div>
        <br />
        <div className="d-flex justify-content-center container cg-2">
          <div>
            <a
              className="btn home-btns"
              href="/site"
              content="navigate to site"
            >
              Visit Site
            </a>
          </div>
          <div>
            <a
              className="btn home-btns"
              href="/edit"
              content="navigate to site"
            >
              Edit User
            </a>
          </div>
          <div>
            <a
              className="btn home-btns"
              href="/contact"
              content="navigate to site"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
