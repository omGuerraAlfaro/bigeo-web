export function FaunaForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">Fauna</th>
                        <th scope="col" className="text-center border">Cantidad</th>
                        <th scope="col" className="text-center border">Pista</th>
                        <th scope="col" className="text-center border">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formFauna.fauna}</td>
                        <td className="text-center border">{formData.__properties__.formFauna.quantity}</td>
                        <td className="text-center border">{formData.__properties__.formFauna.hint}</td>
                        <td className="text-center border">{formData.__properties__.formFauna.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}