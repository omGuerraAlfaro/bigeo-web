export function PlagueForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Plaga</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Población</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.__properties__.formPlague.plague}</td>
                        <td>{formData.__properties__.formPlague.level}</td>
                        <td>{formData.__properties__.formPlague.population}</td>
                        <td>{formData.__properties__.formPlague.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}