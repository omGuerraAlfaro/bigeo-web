export function HumidityForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">Moisture20</th>
                        <th scope="col" className="text-center border">Moisture40</th>
                        <th scope="col" className="text-center border">Moisture60</th>
                        <th scope="col" className="text-center border">Raiz</th>
                        <th scope="col" className="text-center border">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formHumidity.moisture20}</td>
                        <td className="text-center border">{formData.__properties__.formHumidity.moisture40}</td>
                        <td className="text-center border">{formData.__properties__.formHumidity.moisture60}</td>
                        <td className="text-center border">{formData.__properties__.formHumidity.roots}</td>
                        <td className="text-center border">{formData.__properties__.formHumidity.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}