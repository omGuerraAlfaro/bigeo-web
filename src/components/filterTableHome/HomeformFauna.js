import { ButtonState } from "../buttonState/buttonState";

export function HomeFaunaForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <tbody>
                    <tr>
                        <td>{formData.properties.formFauna.fauid}</td>
                        <td>{formData.properties.formFauna.fauna}</td>
                        <td>{formData.properties.formFauna.quantity}</td>
                        <td>{formData.properties.formFauna.hint}</td>
                        <td>{formData.properties.formFauna.observation}</td>
                        <td className="text-center">
                            <ButtonState data={formData} onButtonClick={(formData) => console.log(formData)} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}