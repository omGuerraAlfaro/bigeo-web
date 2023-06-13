export function DiseasesForm({ formData, nameForm}) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Enfermedades</th>
                        <th scope="col">Enfermedades</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.properties.formDiseases.disid}</td>
                        <td>{formData.properties.formDiseases.diseases}</td>
                        <td>{formData.properties.formDiseases.level}</td>
                        <td>{formData.properties.formDiseases.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}