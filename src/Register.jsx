import {Form} from 'react-router-dom';
import {redirect} from 'react-router-dom';

function Register(){
	return(
		<>
			<Form method="post" action="/registro">
				<div className="mx-auto" style={{ width: '50%' }}>
					<div className="mb-3">
					    <input type="text" required placeholder="Nombre" className="form-control" name="nombre" id="nombre" />
					</div>
					<div className="mb-3">
					    <input type="text" required placeholder="Apellido paterno" className="form-control" name="apellidoP" id="apellidoP" />
					</div>
					<div className="mb-3">
					    <input type="text" required placeholder="Apellido materno" className="form-control" name="apellidoM" id="apellidoM" />
					</div>
					<div className="mb-3">
					    <input type="text" pattern="(\+\d{1,3})?\d{10}"  required placeholder="Telefono" className="form-control" name="telefono" id="telefono" />
					</div>
					<div className="mb-3">
					    <input type="email" required placeholder="Correo electronico" className="form-control" name="correo" id="correo" />
					</div>
					<div className="mb-3">
					    <input type="password" required placeholder="Contraseña" className="form-control" name="password" id="password" />
					</div>
					<button type="submit" className="btn btn-primary">Registrar</button>	
				</div>
			</Form>
		</>
	);  	
}

export async function upload({params, request}){
	let formData = await request.formData();

	let login_request = await fetch("http://localhost:8080/add_user", {
		method: "post",
		body: formData
	});

	if(!login_request.ok){
		return "Salio mal";
	}else{
		alert("Sin nada que haccer")
		return redirect("/trabajadores");
	}
}

export default Register;