export function TaskFormSprinkler({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Codigo Aspersor</th>
                        <th scope="col">Defecto</th>
                        <th scope="col">Reparado</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.assigned_form.__properties__.formSprinkler.spcode}</td>
                        <td>{formData.assigned_form.__properties__.formSprinkler.defect}</td>
                        <td>{formData.assigned_form.__properties__.formSprinkler.repaired}</td>
                        <td>{formData.assigned_form.__properties__.formSprinkler.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

