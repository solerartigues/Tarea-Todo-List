import React from "react";

const Tarea = (props) => {
	const borrarTarea = () => {
		props.borrar(props.id);
	};

	return (
		<div className="tarea">
			<div>{props.tarea} </div>

			<div className="eliminar" onClick={borrarTarea}>
				X
			</div>
		</div>
	);
};

export default Tarea;
