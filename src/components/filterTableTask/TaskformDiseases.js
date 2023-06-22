export function TaskFormDiseases({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Enfermedades</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.assigned_form.__properties__.formDiseases.diseases}</td>
                        <td>{formData.assigned_form.__properties__.formDiseases.level}</td>
                        <td>{formData.assigned_form.__properties__.formDiseases.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}