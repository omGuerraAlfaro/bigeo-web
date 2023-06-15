export function HomeDiseasesForm({ formData, nameForm}) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <tbody>
                    <tr>
                        <td>{formData.__properties__.formDiseases.disid}</td>
                        <td>{formData.__properties__.formDiseases.diseases}</td>
                        <td>{formData.__properties__.formDiseases.level}</td>
                        <td>{formData.__properties__.formDiseases.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}