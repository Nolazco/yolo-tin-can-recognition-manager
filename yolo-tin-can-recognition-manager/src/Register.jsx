import Nav from './Nav';
import {Form} from 'react-router-dom';

function Register(){
	return(
		<>
			<Nav/>
			<Form method="post" action="/registro">
				<div className="mx-auto" style={{ width: '50%' }}>
					<div className="mb-3">
					    <input type="text" placeholder="Nombre" className="form-control" name="nombre" id="nombre" />
					</div>
					<div className="mb-3">
					    <input type="text" placeholder="Apellido paterno" className="form-control" name="apellidoP" id="apellidoP" />
					</div>
					<div className="mb-3">
					    <input type="text" placeholder="Apellido materno" className="form-control" name="apellidoM" id="apellidoM" />
					</div>
					<div className="mb-3">
					    <input type="number" max="9999999999" min="999999990" placeholder="Telefono" className="form-control" name="telefono" id="telefono" />
					</div>
					<div className="mb-3">
					    <input type="email" placeholder="Correo electronico" className="form-control" name="correo" id="correo" />
					</div>
					<div className="mb-3">
					    <input type="password" placeholder="Contraseña" className="form-control" name="password" id="password" />
					</div>
					<button type="submit" className="btn btn-primary">Registrar</button>	
				</div>
			</Form>
		</>
	);  	
}

export async function upload({params, request}){
	let formData = await request.formData();

	return fetch("http://localhost:8080/add_user", {
		method: "post",
		body: formData
	});
}

export default Register;