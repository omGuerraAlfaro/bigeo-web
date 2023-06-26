export function PlagueForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Plaga</th>
                        <th scope="col" className="text-center">Nivel</th>
                        <th scope="col" className="text-center">Población</th>
                        <th scope="col" className="text-center">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formPlague.plague}</td>
                        <td className="text-center">{formData.__properties__.formPlague.level}</td>
                        <td className="text-center">{formData.__properties__.formPlague.population}</td>
                        <td className="text-center">{formData.__properties__.formPlague.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}