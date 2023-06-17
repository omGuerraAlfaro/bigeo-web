import React, { useState } from "react";
const initialFormState = {
    type: "",
    image: null,
    properties: {
        username: "",
        nameProperties: "",

    }
}

export const NewForm = () => {
    const [form, setForm] = useState(initialFormState);

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form); // Aquí se manejaría el formulario que el usuario ha ingresado
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {Object.keys(initialFormState).map((key) => (
                    <input
                        key={key}
                        type="text"
                        name={key}
                        placeholder={`ingrese ${key}...`}
                        value={form[key]}
                        onChange={handleInputChange}
                    />
                ))}
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default NewForm;
