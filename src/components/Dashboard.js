import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import MarketPlaceInputs from "./marketplace/MarketPlaceInputs";
import Nirvana from "./Nirvana";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCreditCard,
  faUser,
  faUserGroup,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="home">
                <FontAwesomeIcon className="icon" icon={faHouse} />
                Home
              </Link>
            </li>
            <li>
              <Link to="MarketPlace/">
                <FontAwesomeIcon className="icon" icon={faCartShopping} />
                Free Market
              </Link>
            </li>
            <li>
              <Link to="contact">
                <FontAwesomeIcon className="icon" icon={faUserGroup} />
                Contact
              </Link>
            </li>

            <li>
              <Link to="nirvana/">
                <FontAwesomeIcon className="icon" icon={faCreditCard} />
                Nirvana
              </Link>
            </li>
            <li>
              <Link to="me/">
                <FontAwesomeIcon className="icon" icon={faUser} />
                Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="home/*" element={<h1>Home</h1>} />
          <Route path="contact/*" element={<h1>Contact</h1>} />
          <Route
            path="MarketPlace/*"
            element={
              <div>
                <h1>Free Market</h1>
                <MarketPlaceInputs />
              </div>
            }
          />
          <Route
            path="MarketPlace/*"
            element={
              <div>
                <h1>Free Market</h1>
                <MarketPlaceInputs />
              </div>
            }
          />

          <Route
            path="Nirvana/*"
            element={
              <div>
                <h1>Nirvana</h1>
                <Nirvana />
              </div>
            }
          />
          <Route path="me/*" element={<h1>Me</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;