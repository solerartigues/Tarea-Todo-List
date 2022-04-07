import React, { useState } from "react";

const Tareaform = (props) => {
	const [inputText, setInputText] = useState("");
	const [validacion, setValidacion] = useState("");

	const manejarFormulario = (evento) => {
		setInputText(evento.target.value);
	};

	const agregar = (evento) => {
		evento.preventDefault();
		if (inputText.trim() !== "") {
			props.nuevaTarea(inputText);
			setInputText("");
			setValidacion(true);
		} else setValidacion(false);
	};

	return (
		<div className="principal">
			<form className="form" onSubmit={agregar}>
				<input
					type="text"
					value={inputText}
					onChange={manejarFormulario}
					placeholder={"Añade tu tarea"}
				/>
			</form>
		</div>
	);
};

export default Tareaform;
