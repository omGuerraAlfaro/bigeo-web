export function TaskFormHumidity({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center fw-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Humedad</th>
                        <th scope="col">Moisture20</th>
                        <th scope="col">Moisture40</th>
                        <th scope="col">Moisture60</th>
                        <th scope="col">Raiz</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.__properties__.formHumidity.hmdid}</td>
                        <td>{formData.__properties__.formHumidity.moisture20}</td>
                        <td>{formData.__properties__.formHumidity.moisture40}</td>
                        <td>{formData.__properties__.formHumidity.moisture60}</td>
                        <td>{formData.__properties__.formHumidity.roots}</td>
                        <td>{formData.__properties__.formHumidity.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}