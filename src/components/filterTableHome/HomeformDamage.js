export function HomeDamageForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Daño</th>
                        <th scope="col" className="text-center">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formDamage.damage}</td>
                        <td className="text-center">{formData.__properties__.formDamage.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
