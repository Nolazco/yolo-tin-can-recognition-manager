import * as React from 'react';
import Box from '@mui/material/Box';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack, VictoryLine } from 'victory';
import {useState, useEffect} from "react";
import { app as firebase, db }  from "./firebase";
/************* Declaración graficos*/

function Graficos(){
	let data = useState([]);
  let good_ref = firebase.database().ref("/buenas");

   useEffect(() => {
    // Obtén una referencia a la ubicación de los datos en la base de datos
    const database = firebase.database();
    const dataRef = database.ref('/buenas');

    // Suscríbete a los cambios en los datos
    const onDataChange = snapshot => {
      // Obtiene los datos en un objeto
      const data = snapshot.val();
      React.setData(data);
      console.log(data);
    };

    dataRef.on('value', onDataChange);

    // Limpia la suscripción cuando el componente se desmonta
    return () => {
      dataRef.off('value', onDataChange);
    };
  }, []);


  setInterval(useEffect, 1000 * 60)
	return( /************* Cuerpo del programa */
	<>
		<Box style={{
	        	width: "35pc",
	        	height: "35pc"
	        }}>
			<VictoryChart
			  theme={VictoryTheme.material}
			>
			  <VictoryLine
			    style={{
			      data: { stroke: "#c43a31" },
			      parent: { border: "1px solid #ccc"}
			    }}
			    data={[
			      { x: 1, y: 2 },
			      { x: 2, y: 3 },
			      { x: 3, y: 5 },
			      { x: 4, y: 4 },
			      { x: 5, y: 7 }
			    ]}
			/>
			<VictoryLine
			    style={{
			      data: { stroke: "#47f" },
			      parent: { border: "1px solid #ccc"}
			    }}
			    data={[
			      { x: 4, y: 9 },
			      { x: 1, y: 8 },
			      { x: 9, y: 1 },
			      { x: 4, y: 2 },
			      { x: 1, y: 4 }
			    ]}
			/>
			</VictoryChart>
		</Box>
	</>

	);

}

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

export default Graficos;