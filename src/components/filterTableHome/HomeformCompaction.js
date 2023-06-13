export function HomeCompactionForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Compactación</th>
                        <th scope="col">Presión</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.properties.formCompaction.cptid}</td>
                        <td>{formData.properties.formCompaction.pressure}</td>
                        <td>{formData.properties.formCompaction.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}