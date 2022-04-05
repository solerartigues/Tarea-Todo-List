import React, { useState } from "react";
import Tareaform from "./tareaform.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);
	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	};
	console.log(listaTareas);

	return (
		<div className="Home">
			<Tareaform nuevaTarea={nuevaTarea} />
		</div>
	);
};

export default Home;
