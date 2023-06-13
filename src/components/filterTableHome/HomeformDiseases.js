import { ButtonState } from "../buttonState/buttonState";

export function HomeDiseasesForm({ formData, nameForm}) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <tbody>
                    <tr>
                        <td>{formData.properties.formDiseases.disid}</td>
                        <td>{formData.properties.formDiseases.diseases}</td>
                        <td>{formData.properties.formDiseases.level}</td>
                        <td>{formData.properties.formDiseases.observation}</td>
                        <td className="text-center">
                            <ButtonState data={formData} onButtonClick={(formData) => console.log(formData)} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}