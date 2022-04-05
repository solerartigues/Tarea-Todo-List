import React, { useState } from "react";

const Tareaform = (props) => {
	const [inputText, setInputText] = useState("");

	const manejarFormulario = (evento) => {
		setInputText(evento.target.value);
	};

	const agregar = (evento) => {
		evento.preventDefault();
		props.nuevaTarea(inputText);
	};

	return (
		<div>
			<form className="form" onSubmit={agregar}>
				<span>Tarea</span>

				<input
					type="text"
					value={inputText}
					onChange={manejarFormulario}
				/>
				<button>Añadir</button>
			</form>
		</div>
	);
};

export default Tareaform;
