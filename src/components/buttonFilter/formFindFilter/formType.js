import React, { useState } from 'react';

export function FormType() {
    const [tipo, setTipo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Tipo enviado: ${tipo}`);
        // Aquí podrías hacer algo con el valor del formulario, como enviarlo a un servidor
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );
}
