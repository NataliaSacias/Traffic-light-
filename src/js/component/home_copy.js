import "./App.css";
import React, { useState } from "react";
import Light from "./Light";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const colors = ["red", "yellow", "green"];
	const [lit, setLit] = useState("red");

	return (
		<div className="App">
			{colors.map((color, i) => {
				return (
					<Light key={i} color={color} lit={lit} setLit={setLit} />
				);
			})}
		</div>
	);
};

export default Home;

//ReactDOM.render(<Home />, document.querySelector("#app"));
