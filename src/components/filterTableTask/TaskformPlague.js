export function TaskFormPlague({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Plaga</th>
                        <th scope="col">Plaga</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Población</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.assigned_form.__properties__.formPlague.plid}</td>
                        <td>{formData.assigned_form.__properties__.formPlague.plague}</td>
                        <td>{formData.assigned_form.__properties__.formPlague.level}</td>
                        <td>{formData.assigned_form.__properties__.formPlague.population}</td>
                        <td>{formData.assigned_form.__properties__.formPlague.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}