import React from "react";
import Navbar from "/workspace/Landing-page-react/src/js/component/navbar.jsx"
import Jumbotron from "/workspace/Landing-page-react/src/js/component/jumbotron.jsx"
import Card from "/workspace/Landing-page-react/src/js/component/card.jsx"

import "/workspace/Landing-page-react/src/js/component/jumbotron.css"
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div><Navbar/></div>
			<div><Jumbotron/></div>
			<div><Card/></div>
		</div>
	);
};

export default Home;
