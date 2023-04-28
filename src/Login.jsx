import FormControl from '@mui/material/FormControl';
import { Form } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Input from '@mui/material/Input';
import TinmanLogo from './TinmanLogo';
import {redirect} from 'react-router-dom';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { indigo } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';


function Login() {
    return (
		<>
		<Form method="post" action="/" style={{
		    'width': '500px',
		    'margin': 'auto',
		    'marginTop': '2em',
		    'padding': '10px'
		}}>
		<Paper elevation={3}>
		    <Card variant="outlined">
		        <CardContent>
		            <TinmanLogo size={200} center={true}/>
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
		            <FormControlLabel control={<Switch defaultChecked />} label="Mantener la sesión iniciada" />
		            <Link href="#" underline="always">
					  {'¿Olvidaste tu contraseña?'}
					</Link>
		        </CardContent>
		        <CardActions>
		            <Button variant="contained" type="submit" style={{ 'margin': 'auto' }}>Iniciar sesion</Button>
		        </CardActions>
		    </Card>
		</Paper>
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
