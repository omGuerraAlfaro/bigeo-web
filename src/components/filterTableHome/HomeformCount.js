export function HomeCountForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">Tiene Fruto</th>
                        <th scope="col" className="text-center border">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formCount.hasFruit}</td>
                        <td className="text-center border">{formData.__properties__.formCount.observation}</td>
                    </tr>
                </tbody>                
            </table>
        </div>
    );
}

