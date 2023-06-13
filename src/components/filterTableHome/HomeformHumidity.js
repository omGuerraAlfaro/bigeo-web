export function HomeHumidityForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
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
                        <td>{formData.properties.formHumidity.hmdid}</td>
                        <td>{formData.properties.formHumidity.moisture20}</td>
                        <td>{formData.properties.formHumidity.moisture40}</td>
                        <td>{formData.properties.formHumidity.moisture60}</td>
                        <td>{formData.properties.formHumidity.roots}</td>
                        <td>{formData.properties.formHumidity.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}