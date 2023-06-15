export function HomeGirdlingForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <tbody>
                    <tr>
                        <td>{formData.__properties__.formGirdling.girid}</td>
                        <td>{formData.__properties__.formGirdling.administration}</td>
                        <td>{formData.__properties__.formGirdling.area}</td>
                        <td>{formData.__properties__.formGirdling.sector}</td>
                        <td>{formData.__properties__.formGirdling.percent}</td>
                        <td>{formData.__properties__.formGirdling.stuckGirdling}</td>
                        <td>{formData.__properties__.formGirdling.deepGirdling}</td>
                        <td>{formData.__properties__.formGirdling.heightGirdling}</td>
                        <td>{formData.__properties__.formGirdling.markGirdling}</td>
                        <td>{formData.__properties__.formGirdling.cantGirdling}</td>
                        <td>{formData.__properties__.formGirdling.injectedTree}</td>
                        <td>{formData.__properties__.formGirdling.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
