import * as React from 'react';
import {useRef, useEffect, useCallback} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TinmanLogo from './TinmanLogo';
import { Form } from 'react-router-dom';

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
	
	<TinmanLogo size={200} center={true}/>

	<div className='rowCam'>
		<div class="esp-cam">
			<video class="camara" autoPlay ref={vid}/>
		</div>
		<BasicTable />
  </div>

	</>

	);

}
export default Camara;

/************* Declaración de funciones: Tabla, datos de la tabla, rows */

function createData(
  Name: string,
  Wrong: number,
  Right: number,
  Total: number,
) {
  return { Name, Wrong, Right, Total };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {
  return (
  	<Paper elevation={3}>
	    <TableContainer component={Paper}>
	      <Table sx={{ minWidth: 650 }} aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <TableCell>Empleado/a</TableCell>
	            <TableCell align="right">Wrong</TableCell>
	            <TableCell align="right">Right&nbsp;(g)</TableCell>
	            <TableCell align="right">Total&nbsp;(g)</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {rows.map((row) => (
	            <TableRow
	              key={row.Name}
	              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
	            >
	              <TableCell component="th" scope="row">
	                {row.Name}
	              </TableCell>
	              <TableCell align="right">{row.Wrong}</TableCell>
	              <TableCell align="right">{row.Right}</TableCell>
	              <TableCell align="right">{row.Total}</TableCell>
	            </TableRow>
	          ))}
	        </TableBody>
	      </Table>
	    </TableContainer>
	</Paper>
  );
}