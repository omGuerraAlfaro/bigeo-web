import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export function FormDate({ onFormSubmit }) {
    const [fecha, setFecha] = useState("");
    const [/* data */, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedDate = new Date(fecha);
        selectedDate.setDate(selectedDate.getDate() + 1);
        const newDate = selectedDate.toISOString().split('T')[0];
        // console.log(`Fecha enviada: ${newDate}`);
        // console.log(`data enviada: ${data}`);
        onFormSubmit(newDate);
    };

    useEffect(() => {
        if (fecha) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://bigeo-api.onrender.com/forms/date/${fecha}`);
                    // console.log(response.data);
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
                <input type="submit" value="Filtrar" className="btn btn-primary mt-2 col-11" />
            </form>
        </div>
    );
}
