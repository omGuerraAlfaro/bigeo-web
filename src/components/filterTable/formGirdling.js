export function GirdlingForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID Anillado</th>
                        <th scope="col">Administración</th>
                        <th scope="col">Area</th>
                        <th scope="col">Sector</th>
                        <th scope="col">Porcentaje</th>
                        <th scope="col">Atascado</th>
                        <th scope="col">Profundidad</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Arbol Inyectado</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
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
