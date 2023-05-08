import { yellow } from '@mui/material/colors';
import {useRef, useEffect, useCallback} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  
  const rows = [
	{ name: 'Cantidad de latas', cantidad: 0, bien: 0, medio: 0, mal: 0},
  ];
  

function Camara(){
	const vid = useRef(null);
	const openCamera = useCallback(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({video : true});
		vid.current.srcObject = stream;
	},[vid]);
	
	useEffect(() => {
		openCamera();
	});

	return(
	<>
	<div class="fondo">
		<img src="/yolo-tin-can-recognition-manager/src/img/possibleBackgroundsLogin/fondo4k.png" alt="" />
		<Box class="barra" sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Yolo tin can recognition manager
				</Typography>
				<Button color="inherit">Cerrar Sesion</Button>
				</Toolbar>
			</AppBar>
			</Box>

			<h1 class="texto">Camera Manager</h1>

			<div class="esp-cam">
				<video class="camara" autoPlay ref={vid}/>
			</div>

			<h1 class="texto">Tabla de datos</h1>

			<TableContainer component={Paper}>
		<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
			<TableRow>
				<TableCell>#</TableCell>
				<TableCell align="right">Total</TableCell>
				<TableCell align="right">Buen estado</TableCell>
				<TableCell align="right">Normal estado</TableCell>
				<TableCell align="right">Mal estado</TableCell>
			</TableRow>
			</TableHead>
			<TableBody>
			{rows.map((row) => (
				<TableRow
				key={row.name}
				sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right">{row.cantidad}</TableCell>
				<TableCell align="right">{row.bien}</TableCell>
				<TableCell align="right">{row.medio}</TableCell>
				<TableCell align="right">{row.mal}</TableCell>
				</TableRow>
			))}
			</TableBody>
		</Table>
		</TableContainer>
	</div>
		</>
	);
}

export default Camara;