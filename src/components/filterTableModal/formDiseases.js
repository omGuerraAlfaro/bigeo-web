export function DiseasesForm({ formData, nameForm}) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">Enfermedades</th>
                        <th scope="col" className="text-center border">Nivel</th>
                        <th scope="col" className="text-center border">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formDiseases.diseases}</td>
                        <td className="text-center border">{formData.__properties__.formDiseases.level}</td>
                        <td className="text-center border">{formData.__properties__.formDiseases.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}