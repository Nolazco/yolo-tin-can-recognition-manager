import * as React from 'react';
import {useRef, useEffect, useCallback} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TinmanLogo from './TinmanLogo';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


/************* Declaración de la camara*/

function Camara(){
	const vid = useRef(null);
	const openCamera = useCallback(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({video : true});
		vid.current.srcObject = stream;
	},[vid]);
	
	useEffect(() => {
		openCamera();
	});

	return( /************* Cuerpo del programa */
	<>
	
	<TinmanLogo size={100} center={true}/>
	
	<div class="stroke">
		<DividerText />
	</div>

	<div className='rowCam'>
			<video class="esp-cam" autoPlay ref={vid}/>
  </div>
  <br />
  <div style={{padding : '1pc'}} center={true}>
  	<BasicTable />
  </div>

	</>

	);

}
export default Camara;

/************* Declaración del divider */
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

function DividerText() {
  const content = (
    <div>
      {` `}
    </div>
  );

  return (
    <Divider textAlign="center">
			<Typography variant="h6">
			  CAMARA DE RECONOCIMIENTO
			</Typography>
		</Divider>

  );
}


/************* Declaración de funciones: Tabla, datos de la tabla, rows */

function createData(
  Name: string,
  Totales: number,
  Porcentajes: number
){
  return { Name, Totales, Porcentajes };
}

const rows = [
  createData('Buen estado', 159, 25),
  createData('Daño bajo', 237, 25),
  createData('Daño medio', 262, 25),
  createData('Daño grave', 262, 25),
  createData('Total', 262, 100),
];

function BasicTable() {
  return (
  	<Paper elevation={20}>
	    <TableContainer component={Paper}>
	      <Table sx={{ minWidth: 650 }} aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <TableCell align="left">Estado</TableCell>
	            <TableCell align="center">Totales</TableCell>
	            <TableCell align="center">Porcentajes</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {rows.map((row) => (
	            <TableRow
	              key={row.Name}
	              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
	            >
	              <TableCell align="left" component="th" scope="row">
	                {row.Name}
	              </TableCell>
	              <TableCell align="center">{row.Totales}</TableCell>
								<TableCell align="center">{row.Porcentajes}%</TableCell>
	            </TableRow>
	          ))}
	        </TableBody>
	      </Table>
	    </TableContainer>
	</Paper>
  );
}