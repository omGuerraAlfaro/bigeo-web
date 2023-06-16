export function HomeGirdlingForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h6 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h6>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Administración</th>
                        <th scope="col">Area</th>
                        <th scope="col">Sector</th>
                        <th scope="col">Porcentaje</th>
                        <th scope="col">Atascado</th>
                        <th scope="col">Profundidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.__properties__.formGirdling.administration}</td>
                        <td>{formData.__properties__.formGirdling.area}</td>
                        <td>{formData.__properties__.formGirdling.sector}</td>
                        <td>{formData.__properties__.formGirdling.percent}</td>
                        <td>{formData.__properties__.formGirdling.stuckGirdling}</td>
                        <td>{formData.__properties__.formGirdling.deepGirdling}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col">Altura</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Arbol Inyectado</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
