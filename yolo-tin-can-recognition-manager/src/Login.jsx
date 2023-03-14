import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsFillPersonFill as Person} from "react-icons/bs";
import {BsFillEnvelopeFill as Envelope} from "react-icons/bs";
import {BsFillKeyFill as Key} from "react-icons/bs";
import Nav from './Nav';

function Login(){
	return(
		<>
		<Nav/>
		<div className="mb-3 mx-auto" style={{ width: '50%' }}>
			<InputGroup className="mb-3">
		        <InputGroup.Text id="basic-addon1"><Person/></InputGroup.Text>
		        <Form.Control
		        	type="text"
		        	placeholder="Usuario"
		        />
		    </InputGroup>
		</div>

		<div className="mb-3 mx-auto" style={{ width: '50%' }}>
			<InputGroup className="mb-3">
		        <InputGroup.Text id="basic-addon1"><Envelope/></InputGroup.Text>
		        <Form.Control
		        	type="email"
		        	placeholder="Correo"
		        />
		    </InputGroup>
		</div>

		<div className="mb-3 mx-auto" style={{ width: '50%' }}>
			<InputGroup className="mb-3">
		        <InputGroup.Text id="basic-addon1"><Key/></InputGroup.Text>
		        <Form.Control
		        	type="password"
		        	placeholder="Contraseña"
		        />
		    </InputGroup>
		</div><br/>

		<center>
			<a href="/opciones" className="btn btn-success">Iniciar sesión</a>
		</center>
		</>
	);
}

export default Login;