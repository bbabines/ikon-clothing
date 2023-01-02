import Directory from "../../components/Directory/Directory.component";
import { Outlet } from "react-router-dom";

import "./home.styles.scss";

const Home = () => {
	return (
		<div className="home-container">
			<Outlet />
			<Directory />
		</div>
	);
};

export default Home;
