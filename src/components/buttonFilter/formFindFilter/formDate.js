import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export function FormDate({ onFormSubmit }) {
    const [fecha, setFecha] = useState("");
    const [data, setData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Fecha enviada: ${fecha}`);
        onFormSubmit(fecha);
    };

    useEffect(() => {
        if (fecha) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3400/forms/date/${fecha}`);
                    setData(response.data);
                } catch (error) {
                    console.error(`Error fetching data for date ${fecha}:`, error);
                }
            }
    
            fetchData();
        }
    }, [fecha]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fecha" className="form-label">Fecha:</label>
                <input 
                    type="date" 
                    id="fecha" 
                    name="fecha" 
                    value={fecha} 
                    onChange={(e) => setFecha(e.target.value)}
                    className="form-control"
                />
                <input type="submit" value="Submit" className="btn btn-primary mt-2" />
            </form>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
