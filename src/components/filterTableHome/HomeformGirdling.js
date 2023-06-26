export function HomeGirdlingForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h5 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h5>
            <table className="table table-sm table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Administración</th>
                        <th scope="col" className="text-center">Area</th>
                        <th scope="col" className="text-center">Sector</th>
                        <th scope="col" className="text-center">Porcentaje</th>
                        <th scope="col" className="text-center">Atascado</th>
                        <th scope="col" className="text-center">Profundidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formGirdling.administration}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.area}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.sector}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.percent}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.stuckGirdling}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.deepGirdling}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Altura</th>
                        <th scope="col" className="text-center">Marca</th>
                        <th scope="col" className="text-center">Cantidad</th>
                        <th scope="col" className="text-center">Arbol Inyectado</th>
                        <th scope="col" className="text-center">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{formData.__properties__.formGirdling.heightGirdling}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.markGirdling}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.cantGirdling}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.injectedTree}</td>
                        <td className="text-center">{formData.__properties__.formGirdling.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
