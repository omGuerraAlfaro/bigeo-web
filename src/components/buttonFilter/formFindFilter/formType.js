import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export function FormType({ onFormSubmit }) {
    const [tipo, setTipo] = useState("");

    const formTypeMapping = {
        formSprinkler: 'Aspersor',
        formDamage: 'Daño',
        formHumidity: 'Humedad',
        formCompaction: 'Compactación',
        formFauna: 'Fauna',
        formCount: 'Conteo',
        formDiseases: 'Enfermedades',
        formGirdling: 'Anillado',
        formPlague: 'Plaga'
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Tipo enviado: ${tipo}`);

        try {
            const response = await axios.get(`https://bigeo-api.onrender.com/forms/type/${tipo}`);
            onFormSubmit(tipo, response.data);
            console.log(response.data);
        } catch (error) {
            console.error(`Error fetching form data for type ${tipo}:`, error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tipo" className="form-label">Tipo:</label>
                <select
                    className="form-select"
                    id="tipo"
                    name="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    {Object.keys(formTypeMapping).map((formType, index) => (
                        <option key={index} value={formType}>{formTypeMapping[formType]}</option>
                    ))}
                </select>
                <div className="mt-2">
                    <input type="submit" value="Filtrar" className="btn btn-primary mt-2 col-11" />
                </div>
            </form>
            <hr />
        </div>
    );
}
