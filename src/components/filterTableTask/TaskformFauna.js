export function TaskFormFauna({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center fw-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Fauna</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Pista</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.assigned_form.__properties__.formFauna.fauna}</td>
                        <td>{formData.assigned_form.__properties__.formFauna.quantity}</td>
                        <td>{formData.assigned_form.__properties__.formFauna.hint}</td>
                        <td>{formData.assigned_form.__properties__.formFauna.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}