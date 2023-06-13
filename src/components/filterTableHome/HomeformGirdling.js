export function HomeGirdlingForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <tbody>
                    <tr>
                        <td>{formData.properties.formGirdling.girid}</td>
                        <td>{formData.properties.formGirdling.administration}</td>
                        <td>{formData.properties.formGirdling.area}</td>
                        <td>{formData.properties.formGirdling.sector}</td>
                        <td>{formData.properties.formGirdling.percent}</td>
                        <td>{formData.properties.formGirdling.stuckGirdling}</td>
                        <td>{formData.properties.formGirdling.deepGirdling}</td>
                        <td>{formData.properties.formGirdling.heightGirdling}</td>
                        <td>{formData.properties.formGirdling.markGirdling}</td>
                        <td>{formData.properties.formGirdling.cantGirdling}</td>
                        <td>{formData.properties.formGirdling.injectedTree}</td>
                        <td>{formData.properties.formGirdling.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
