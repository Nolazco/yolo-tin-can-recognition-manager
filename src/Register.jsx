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
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

function Register(){
return (
		<>
		<Form method="post" action="register" style={{
		    'width': '500px',
		    'margin': 'auto',
		    'marginTop': '2em',
		    'marginBottom': '2em',
		    'padding': '15px'
		}}>
		<Paper elevation={3}>
		    <Card style={{backgroundColor: blue[100]}} variant="outlined">
		        <CardContent>
		            <TinmanLogo size={150} center={true}/>
					<Typography textAlign="center" variant="h6">
					  REGISTRO
					</Typography>		            
{/* Nombre */} 
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="usuario-login">Nombre</InputLabel>
		                <Input type="text" required placeholder="Nombre" name="nombre" id="nombre"/>
		            </FormControl>
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="usuario-login">apellido materno</InputLabel>
		                <Input type="text" required placeholder="Apellido materno" name="apellidoM" id="apellidoM"/>
		            </FormControl>		            
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="usuario-login">apellido paterno</InputLabel>
		                <Input type="text" required placeholder="Apellido paterno" name="apellidoP" id="apellidoP"/>
		            </FormControl>
{/* Correo Y TELEFONO*/} 
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="correo-login">Correo</InputLabel>
		                <Input type="email" required placeholder="Correo electronico" name="correo" id="correo"/>
		            </FormControl>
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="correo-login">Telefono</InputLabel>
		                <Input type="text" pattern="(\+\d{1,3})?\d{10}"  required placeholder="Telefono" name="telefono" id="telefono"/>
		            </FormControl>		            
{/* Contraseña/Confirmación */} 
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="password-login">Contraseña</InputLabel>
		                <Input type="password" required placeholder="Ej.: 1234" name="password" id="password"/>
		            </FormControl>
		            <FormControl required fullWidth margin="normal">
		                <InputLabel htmlFor="password-login">Confirme su contraseña</InputLabel>
		                <Input type="password" required placeholder="Ej.: 1234" name="password" id="cPassword"/>
		            </FormControl>

		        </CardContent>
		        <CardActions> {/* Botón de registro */} 
		            <Button variant="contained" type="submit" style={{ 'margin': 'auto' }}>Registrese</Button>
		        </CardActions>
		    </Card>
		</Paper>
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