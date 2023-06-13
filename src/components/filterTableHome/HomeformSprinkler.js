import { ButtonState } from "../buttonState/buttonState";

export function HomeSprinklerForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Aspersor</th>
                        <th scope="col">Codigo Aspersor</th>
                        <th scope="col">Defecto</th>
                        <th scope="col">Reparado</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.properties.formSprinkler.spid}</td>
                        <td>{formData.properties.formSprinkler.spcode}</td>
                        <td>{formData.properties.formSprinkler.defect}</td>
                        <td>{formData.properties.formSprinkler.repaired}</td>
                        <td>{formData.properties.formSprinkler.observation}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
}

