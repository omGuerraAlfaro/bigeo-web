import { ButtonState } from "../buttonState/buttonState";

export function HomeDamageForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <tbody>
                    <tr>
                        <td>{formData.properties.formDamage.dmgid}</td>
                        <td>{formData.properties.formDamage.damage}</td>
                        <td>{formData.properties.formDamage.observation}</td>
                        <td className="text-center">
                            <ButtonState data={formData} onButtonClick={(formData) => console.log(formData)} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
