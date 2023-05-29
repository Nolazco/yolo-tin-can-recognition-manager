import * as React from 'react';
import Box from '@mui/material/Box';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack, VictoryLine } from 'victory';	

/************* Declaración graficos*/

function Graficos(){

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