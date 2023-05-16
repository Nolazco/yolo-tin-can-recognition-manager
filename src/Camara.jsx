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

		<div class="esp-cam">
			<video class="camara" autoPlay ref={vid}/>
		</div>

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
  Hour: number,
  Wrong: number,
  Right: number,
  Total: number,
) {
  return { Name, Hour, Wrong, Right, Total };
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
	            <TableCell align="right">Hour</TableCell>
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
	              <TableCell align="right">{row.Hour}</TableCell>
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