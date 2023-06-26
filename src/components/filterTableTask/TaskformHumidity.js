export function TaskFormHumidity({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center fw-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">ID Humedad</th>
                        <th scope="col" className="text-center">Moisture20</th>
                        <th scope="col" className="text-center">Moisture40</th>
                        <th scope="col" className="text-center">Moisture60</th>
                        <th scope="col" className="text-center">Raiz</th>
                        <th scope="col" className="text-center">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formHumidity.hmdid}</td>
                        <td className="text-center">{formData.__properties__.formHumidity.moisture20}</td>
                        <td className="text-center">{formData.__properties__.formHumidity.moisture40}</td>
                        <td className="text-center">{formData.__properties__.formHumidity.moisture60}</td>
                        <td className="text-center">{formData.__properties__.formHumidity.roots}</td>
                        <td className="text-center">{formData.__properties__.formHumidity.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}