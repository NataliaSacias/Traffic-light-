import "./App.css";
import React, { useState } from "react";
//import Light from "./Light";
import Luces from "./Luces";

//create your first component

const Home = () => {
	let colores = ["red", "yellow", "green"];
	const [lit, setLit] = useState();
	return (
		<div className="App">
			{colores.map((color, i) => {
				return (
					<Luces key={i} color={color} lit={lit} setLit={setLit} />
				);
			})}
		</div>
	);
};

export default Home;

//ReactDOM.render(<Home />, document.querySelector("#app"));
