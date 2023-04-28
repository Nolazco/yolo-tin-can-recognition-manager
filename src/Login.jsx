import FormControl from '@mui/material/FormControl';
import { Form } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Input from '@mui/material/Input';
import Tuna from './TunaLogo';
import { redirect } from 'react-router-dom';

function Login() {
    return (
		<>
		<Form method="post" action="/" style={{
		    'width': '500px',
		    'margin': 'auto',
		    'marginTop': '2em',
		    'padding': '10px'
		}}>
		    <Card variant="outlined">
		        <CardContent>
		            <Tuna size={72} center={true}/>
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="usuario-login">Usuario</InputLabel>
		                <Input id="usuario-login" name="user" type="text" />
		            </FormControl>

		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="correo-login">Correo</InputLabel>
		                <Input id="correo-login" name="correo" type="email" />
		            </FormControl>

		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="password-login">Contraseña</InputLabel>
		                <Input id="password-login" name="password" type="password" />
		            </FormControl>
		        </CardContent>
		        <CardActions>
		            <Button variant="contained" type="submit" style={{ 'margin': 'auto' }}>Iniciar sesion</Button>
		        </CardActions>
		    </Card>
		</Form>
		</>
    );
}

export async function upload({params, request}){
	let formData = await request.formData();

	let login_request = await fetch("http://localhost:8080/login", {
		method: "post",
		body: formData
	});

	let resp = await login_request.json();

	if(resp.ok == false){
		alert("Datos incorrectos")
		return 0;
	}else{
		alert("Datos correctos")
		return redirect("/opciones");
	}
}

export default Login;
