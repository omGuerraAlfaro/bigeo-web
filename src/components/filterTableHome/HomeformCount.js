import { ButtonState } from "../buttonState/buttonState";

export function HomeCountForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Conteo</th>
                        <th scope="col">Tiene Fruto</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.properties.formCount.cntid}</td>
                        <td>{formData.properties.formCount.hasFruit}</td>
                        <td>{formData.properties.formCount.observation}</td>
                    </tr>
                </tbody>                
            </table>
        </div>
    );
}

