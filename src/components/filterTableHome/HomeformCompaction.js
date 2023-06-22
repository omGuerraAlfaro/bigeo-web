export function HomeCompactionForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Presión</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.__properties__.formCompaction.pressure}</td>
                        <td>{formData.__properties__.formCompaction.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}