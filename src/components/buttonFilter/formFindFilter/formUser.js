import React, { useState } from 'react';

export function FormUser() {
    const [encargado, setEncargado] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Encargado enviado: ${encargado}`);
        // Aquí podrías hacer algo con el valor del formulario, como enviarlo a un servidor
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="encargado">Encargado:</label>
            <input type="text" id="encargado" name="encargado" value={encargado} onChange={(e) => setEncargado(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );
}

