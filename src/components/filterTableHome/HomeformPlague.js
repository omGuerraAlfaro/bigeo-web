export function HomePlagueForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">ID Plaga</th>
                        <th scope="col" className="text-center border">Plaga</th>
                        <th scope="col" className="text-center border">Nivel</th>
                        <th scope="col" className="text-center border">Población</th>
                        <th scope="col" className="text-center border">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formPlague.plid}</td>
                        <td className="text-center border">{formData.__properties__.formPlague.plague}</td>
                        <td className="text-center border">{formData.__properties__.formPlague.level}</td>
                        <td className="text-center border">{formData.__properties__.formPlague.population}</td>
                        <td className="text-center border">{formData.__properties__.formPlague.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}