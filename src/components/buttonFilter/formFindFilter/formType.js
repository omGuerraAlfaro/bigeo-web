import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export function FormType({ onFormSubmit }) {
    const [tipo, setTipo] = useState("");
    const [formData, setFormData] = useState({
        formSprinkler: null,
        formDamage: null,
        formHumidity: null,
        formCompaction: null,
        formFauna: null,
        formCount: null,
        formDiseases: null,
        formGirdling: null,
        formPlague: null
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Tipo enviado: ${tipo}`);
        onFormSubmit(tipo);
    };

    useEffect(() => {
        if (tipo) {
            const fetchFormData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3200/forms/type/${tipo}`);
                    setFormData((prevState) => ({
                        ...prevState,
                        [tipo]: response.data
                    }));
                } catch (error) {
                    console.error(`Error fetching form data for type ${tipo}:`, error);
                }
            }
    
            fetchFormData();
        }
    }, [tipo]);

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
                    {Object.keys(formData).map((formType, index) => (
                        <option key={index} value={formType}>{formType}</option>
                    ))}
                </select>
                <input type="submit" value="Submit" className="btn btn-primary mt-2 px-4" />
            </form>
        </div>
    );
}
