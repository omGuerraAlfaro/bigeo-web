import { ButtonState } from "../buttonState/buttonState";

export function HomeHumidityForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <tbody>
                    <tr>
                        <td>{formData.properties.formHumidity.hmdid}</td>
                        <td>{formData.properties.formHumidity.moisture20}</td>
                        <td>{formData.properties.formHumidity.moisture40}</td>
                        <td>{formData.properties.formHumidity.moisture60}</td>
                        <td>{formData.properties.formHumidity.roots}</td>
                        <td>{formData.properties.formHumidity.observation}</td>
                        <td className="text-center">
                            <ButtonState data={formData} onButtonClick={(formData) => console.log(formData)} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}