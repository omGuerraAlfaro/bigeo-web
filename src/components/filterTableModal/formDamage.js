export function DamageForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Daño</th>
                        <th scope="col">Daño</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.__properties__.formDamage.dmgid}</td>
                        <td>{formData.__properties__.formDamage.damage}</td>
                        <td>{formData.__properties__.formDamage.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
