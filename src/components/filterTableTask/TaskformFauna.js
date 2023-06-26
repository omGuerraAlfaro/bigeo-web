export function TaskFormFauna({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center fw-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-sm table-striped table-responsive">
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