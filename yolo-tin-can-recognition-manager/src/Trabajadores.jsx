import Users from './data/users.json';
import Table from 'react-bootstrap/Table';
import Nav from './Nav';

function Trabajadores(){
	return(
		<>
			<Nav/>

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
			      {Users.map(user => {
			      	return(
			      	<tr key={user.id}>
			      	  <td>{user.id}</td>
			          <td>{user.nombre}</td>
			          <td>{user.aPaterno}</td>
			          <td>{user.aMaterno}</td>
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

export default Trabajadores;