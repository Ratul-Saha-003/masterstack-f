import React, { useEffect, useState } from "react";
import "./styles.css";
import bgimg from "../../assets/stars.jpg";
import { useAuth } from "../../contexts/usercontext";
import { getDetails } from "../../services/apis";
const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: "-------------------",
    teamName: "---------",
    teamLeaderEmail: "---------",
    points: "---------",
    cost: "----------",
    techStack: {
      web: ["Loading..."],
      app: ["Loading..."],
      ml: ["Loading..."],
      blockchain: ["Loading..."],
    },
  });

  const fetchData = async () => {
    try{
      const resp = await getDetails(user._id);
    setUserData(resp.data.user);
    }catch(err){
      console.log(err)
    }
  };
  const [objectEntries, setObjectEntries] = useState([]);
  useEffect(() => {
  }, [objectEntries]);

  useEffect(() => {
    setObjectEntries(Object.entries(userData.techStack).filter(([key, value]) => {return value.length !== 0}));
  }, [userData]);

  useEffect(() => {
    fetchData();
    proff();
  }, []);

  const proff = () => {
    document.getElementById("card2").style.display = "none";
    document.getElementById("head2").style.display = "none";
    document.getElementById("card1").style.display = "";
    document.getElementById("head1").style.display = "";
  };
  const proff2 = () => {
    document.getElementById("card1").style.display = "none";
    document.getElementById("head1").style.display = "none";
    document.getElementById("card2").style.display = "";
    document.getElementById("head2").style.display = "";
  };
  return (
    <div
      className="prof"
      style={{
        backgroundImage: { bgimg },
      }}
    >
      {/* <!-- Navbar top --> */}
      <div class="navbar-top">
        <div class="title">
          <h1 style={{ fontSize: "37px" }}>Profile</h1>
        </div>

        {/* <!-- Navbar --> */}
        <ul id="tabb">
          <li>
            <a
              href="#profile"
              class="active"
              onClick={proff}
              style={{ color: "white" }}
              className="topNav"
            >
              Details
            </a>
          </li>
          <li>
            <a
              href="#settings"
              onClick={proff2}
              style={{ color: "white" }}
              className="topNav"
            >
              TechStack
            </a>
          </li>
        </ul>
        {/* <!-- End --> */}
      </div>
      {/* <!-- End --> */}

      {/* <!-- Sidenav --> */}
      <div class="sidenav">
        <div class="profile">
          <div class="name">MasterStack</div>
          <div class="job">Concetto 23'</div>
        </div>

        <div class="sidenav-url">
          <div class="url">
            <a
              href="#profile"
              class="active"
              onClick={proff}
              style={{ color: "white" }}
            >
              Team Details
            </a>
            <hr align="center" />
          </div>
          <div class="url">
            <a href="#settings" onClick={proff2} style={{ color: "white" }}>
              TechStack
            </a>
            <hr align="center" />
          </div>
        </div>
      </div>
      {/* <!-- End --> */}

      {/* <!-- Main --> */}
      <div class="main">
        <h2 id="head1">IDENTITY</h2>
        <div class="card" id="card1">
          <div class="card-body">
            <i class="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
              <tr>
                  <td>Team Name</td>
                  <td>:</td>
                  <td>{userData.teamName}</td>
                </tr>
                <tr>
                  <td>Leader Name</td>
                  <td>:</td>
                  <td>{userData.name}</td>
                </tr>
                
                <tr>
                  <td>Leader Email</td>
                  <td>:</td>
                  <td>{userData.teamLeaderEmail}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 id="head2">Available TechStack </h2>
        <div class="card" id="card2">
          <div class="card-body">
            <i class="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                {objectEntries.map(([key, val]) => (
                    <tr>
                      <td>{key}</td>
                      <td>:</td>
                      <td>
                        {val.map((e, i) => {
                            return (
                              <>
                                <span>
                                  {i+1}. {e}&nbsp;&nbsp;
                                </span>
                                <br></br>
                              </>
                            );
                        })}
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
