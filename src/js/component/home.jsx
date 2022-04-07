import React, { useState } from "react";
import Tareaform from "./tareaform.jsx";
import Tarea from "./tarea.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);
	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	};

	const borrar = (id) => {
		const listaFiltradas = listaTareas.filter(
			(evento, index) => index !== id
		);
		setListaTareas(listaFiltradas);
	};

	return (
		<div className="Home">
			<div className="todos">todos</div>

			<Tareaform nuevaTarea={nuevaTarea} />
			<div className="lista">
				{listaTareas.map((evento, index) => (
					<Tarea tarea={evento} borrar={borrar} id={index} />
				))}
			</div>
			<div className="contador">{listaTareas.length} Tareas</div>
		</div>
	);
};

export default Home;
