export function CompactionForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Presión</th>
                        <th scope="col" className="text-center">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formCompaction.pressure}</td>
                        <td className="text-center">{formData.__properties__.formCompaction.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}