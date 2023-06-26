export function TaskFormSprinkler({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center fw-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Codigo Aspersor</th>
                        <th scope="col" className="text-center">Defecto</th>
                        <th scope="col" className="text-center">Reparado</th>
                        <th scope="col" className="text-center">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formSprinkler.spcode}</td>
                        <td className="text-center">{formData.__properties__.formSprinkler.defect}</td>
                        <td className="text-center">{formData.__properties__.formSprinkler.repaired}</td>
                        <td className="text-center">{formData.__properties__.formSprinkler.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

