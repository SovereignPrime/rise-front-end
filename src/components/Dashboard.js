import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import MarketPlaceInputs from "./marketplace/MarketPlaceInputs";
import Nirvana from "./wallet/Nirvana";
import Home from "./home/Home";
import Matching from "./Matching/Matching";
import nirvana from "../styles/assets/nirvana.png";
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
							<Link to="Home/">
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
								<img src={nirvana} />
								Nirvana
							</Link>
							<ul>
								<li></li>
								<li></li>
							</ul>
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
					<Route
						path="Home/*"
						element={
							<div>
								<h1>Home</h1>
								<Home />
							</div>
						}
					/>

					<Route path="contact/*" element={<h1>Contact</h1>} />
					<Route
						path="MarketPlace/*"
						element={
							<div>
								<p>Free Market</p>
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
					<Route
						path="Matching/*"
						element={
							<div>
								<Matching />
							</div>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default Dashboard;
