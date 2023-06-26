export function HomeSprinklerForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">Codigo Aspersor</th>
                        <th scope="col" className="text-center border">Defecto</th>
                        <th scope="col" className="text-center border">Reparado</th>
                        <th scope="col" className="text-center border">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formSprinkler.spcode}</td>
                        <td className="text-center border">{formData.__properties__.formSprinkler.defect}</td>
                        <td className="text-center border">{formData.__properties__.formSprinkler.repaired}</td>
                        <td className="text-center border">{formData.__properties__.formSprinkler.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

