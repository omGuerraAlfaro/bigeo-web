export function GirdlingForm({ formData, nameForm }) {
    return (
        <div className="container border rounded table-separate">
            <h4 className="text-center font-weight-bold my-1">Formulario de {nameForm}</h4>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">Administración</th>
                        <th scope="col" className="text-center border">Area</th>
                        <th scope="col" className="text-center border">Sector</th>
                        <th scope="col" className="text-center border">Porcentaje</th>
                        <th scope="col" className="text-center border">Atascado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formGirdling.administration}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.area}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.sector}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.percent}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.stuckGirdling}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col" className="text-center border">Profundidad</th>
                        <th scope="col" className="text-center border">Altura</th>
                        <th scope="col" className="text-center border">Marca</th>
                        <th scope="col" className="text-center border">Cantidad</th>
                        <th scope="col" className="text-center border">Arbol Inyectado</th>
                        <th scope="col" className="text-center border">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border">{formData.__properties__.formGirdling.deepGirdling}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.heightGirdling}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.markGirdling}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.cantGirdling}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.injectedTree}</td>
                        <td className="text-center border">{formData.__properties__.formGirdling.observation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
