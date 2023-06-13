export function HomeFaunaForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Fauna</th>
                        <th scope="col">Fauna</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Pista</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.properties.formFauna.fauid}</td>
                        <td>{formData.properties.formFauna.fauna}</td>
                        <td>{formData.properties.formFauna.quantity}</td>
                        <td>{formData.properties.formFauna.hint}</td>
                        <td>{formData.properties.formFauna.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}