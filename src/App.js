import "./styles.css";
import Home from "./components/home.jsx";
import Profile from "./components/profile.jsx";
import About from "./components/about";
import { useState } from "react";
import Resume from "./components/resume";

const componentMap = {
  home: Home,
  profile: Profile,
  about: About,
  resume: Resume
};

const navList = [
  { name: "home", icon: "fa fa-facebook" },
  { name: "profile", icon: "fa fa-facebook" },
  { name: "about", icon: "fa fa-facebook" },
  { name: "resume", icon: "fa fa-facebook" },
  { name: "services", icon: "fa fa-facebook" },
  { name: "intrest", icon: "fa fa-facebook" },
  { name: "testimonial", icon: "fa fa-facebook" },
  { name: "portfolio", icon: "fa fa-facebook" }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState(Home);
  const [currentTabName, setCurrentTabName] = useState("home");

  const onNavClick = (i) => {
    let name = navList[i].name;
    setCurrentTabName(name);
    setCurrentTab(componentMap[name]);
  };

  return (
    <main className="d-flex">
      <div className="col-0 col-md-2 col-lg-3 col-xl-2 bg-main d-flex flex-column sidebar p-0">
        <div className="d-flex nav-header">
          <span className="m-auto">Menu</span>
        </div>
        <div>
          <div className="navs-hold pr-0">
            {navList.map((n, i) => (
              <div
                className={`nav ${n.name === currentTabName ? "active" : ""}`}
                key={i}
                onClick={() => onNavClick(i)}
              >
                <i className={n.icon} /> {n.name}
              </div>
            ))}
          </div>
        </div>
        <div className="nav-footer">
          <div className="d-flex">
            <span className="profile"></span>
            <span className="name">User Name</span>
          </div>
        </div>
      </div>
      <div className="col bg-sec">{currentTab}</div>
    </main>
  );
}
