export function TaskFormCompaction({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center fw-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Presión</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.assigned_form.__properties__.formCompaction.pressure}</td>
                        <td>{formData.assigned_form.__properties__.formCompaction.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}