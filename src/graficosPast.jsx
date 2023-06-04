import Box from '@mui/material/Box';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack, VictoryLine } from 'victory';
import {useState, useEffect, useCallback} from "react";
import app  from "./firebase";
/************* Declaración graficos*/

function Graficos(){
	let [data, setData] = useState([]);
  let good_ref = app.database().ref("/buenas");
 const onDataChange = useCallback(snapshot => {
	 // Obtiene los datos en un objeto
   let _d = snapshot.val();
   console.log(data);
   setData([ ...data, { x: (new Date(_d.fech)).getMilliseconds(), y: _d.promedio }]);
 }, [setData]);
  

  useEffect(() => {
   // Obtén una referencia a la ubicación de los datos en la base de datos
   const database = app.database();
   const dataRef = database.ref('/buenas');
   // Suscríbete a los cambios en los datos
    dataRef.on('value', onDataChange);
  
   // Limpia la suscripción cuando el componente se desmonta
   return () => {
     dataRef.off('value', onDataChange);
   };
	}, [onDataChange]);


	return( /************* Cuerpo del programa */
	<>
		<Box style={{
	        	width: "35pc",
	        	height: "35pc",
						margin: 'auto',
	        }}>
			<VictoryChart
			  theme={VictoryTheme.material}
			>
			  <VictoryLine
			    style={{
			      data: { stroke: "#c43a31" },
			      parent: { border: "1px solid #ccc"}
			    }}
			    data={data}
			/>
			</VictoryChart>
		</Box>
	</>

	);

}

export default Graficos;