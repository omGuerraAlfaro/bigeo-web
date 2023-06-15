import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function FormUser({ onFormSubmit }) {
    const [encargado, setEncargado] = useState("");
    const [users, setUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Encargado enviado: ${encargado}`);
        onFormSubmit(encargado);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3400/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        if (encargado) {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3400/users/${encargado}`);
                    // hacer algo con los datos del usuario
                } catch (error) {
                    console.error(`Error fetching user data for ${encargado}:`, error);
                }
            }
    
            fetchUserData();
        }
    }, [encargado]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="encargado" className="form-label">Encargado:</label>
                <select 
                    className="form-select"
                    id="encargado" 
                    name="encargado" 
                    value={encargado} 
                    onChange={(e) => setEncargado(e.target.value)}
                >
                    <option value="">Select...</option>
                    {users.map((user, index) => (
                        <option key={index} value={user.username}>{user.username}</option>
                    ))}
                </select>
                <input type="submit" value="Submit" className="btn btn-primary mt-2" />
            </form>
        </div>
    );
}
