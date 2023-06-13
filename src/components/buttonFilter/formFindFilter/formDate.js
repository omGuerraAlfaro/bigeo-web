import React, { useState } from 'react';

export function FormDate() {
    const [fecha, setFecha] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Fecha enviada: ${fecha}`);
        // Aquí podrías hacer algo con el valor del formulario, como enviarlo a un servidor
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );
}
