import Table from 'react-bootstrap/Table';
import {useLoaderData} from 'react-router-dom';

function Trabajadores(){
	let useData = useLoaderData();
	return(
		<>
			<center>
			<a className="btn btn-success mx-auto" href="/registro">Registrar trabajador</a>
			<div style={{ width: '80%' }}>
				<Table striped bordered>
			      <thead>
			        <tr>
			          <th>#</th>
			          <th>Nombre</th>
			          <th>Apellido paterno</th>
			          <th>Apellido materno</th>
			          <th>Email</th>
			        </tr>
			      </thead>
			      <tbody>
			      {useData.data.map(user => {
			      	return(
			      	<tr key={user.id}>
			      	  <td>{user.id}</td>
			          <td>{user.nombre}</td>
			          <td>{user.apellidoP}</td>
			          <td>{user.apellidoM}</td>
			          <td>{user.correo}</td>
			        </tr>
			      	)
			      })}
			      </tbody>
			    </Table>
		    </div>
		    </center>
		</>
	);
}

export async function load({params}){
	return fetch("http://localhost:8080/load_users");
}

export default Trabajadores;