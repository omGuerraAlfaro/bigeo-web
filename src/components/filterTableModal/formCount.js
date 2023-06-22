export function CountForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Tiene Fruto</th>
                        <th scope="col" className="text-center">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formCount.hasFruit}</td>
                        <td className="text-center">{formData.__properties__.formCount.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

