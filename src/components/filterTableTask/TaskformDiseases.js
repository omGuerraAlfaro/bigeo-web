export function TaskFormDiseases({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center fw-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Enfermedades</th>
                        <th scope="col" className="text-center">Nivel</th>
                        <th scope="col" className="text-center">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formDiseases.diseases}</td>
                        <td className="text-center">{formData.__properties__.formDiseases.level}</td>
                        <td className="text-center">{formData .__properties__.formDiseases.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}