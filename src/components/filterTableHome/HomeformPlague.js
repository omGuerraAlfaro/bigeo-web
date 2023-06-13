export function HomePlagueForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Plaga</th>
                        <th scope="col">Plaga</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Población</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.properties.formPlague.plid}</td>
                        <td>{formData.properties.formPlague.plague}</td>
                        <td>{formData.properties.formPlague.level}</td>
                        <td>{formData.properties.formPlague.population}</td>
                        <td>{formData.properties.formPlague.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}